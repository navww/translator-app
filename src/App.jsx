import { useState } from 'react';
import TranslationHistory from './components/TranslationHistory';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const translateText = async () => {
    if (!inputText.trim()) {
      setError('Please enter text to translate');
      return;
    }

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=en|hi`
      );
      const data = await response.json();
      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        const newTranslation = {
          id: Date.now(),
          english: inputText,
          hindi: data.responseData.translatedText,
        };
        setTranslatedText(newTranslation.hindi);
        setHistory((prev) => {
          const newHistory = [newTranslation, ...prev].slice(0, 10);
          return newHistory;
        });
        setError('');
      } else {
        setError('Translation failed. Please try again.');
      }
    } catch (err) {
      setError('Error connecting to translation API');
    }
  };

  const clearHistory = () => {
    setHistory([]);
    setTranslatedText('');
    setInputText('');
    setError('');
  };

  const speakText = () => {
    if (translatedText) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = 'hi-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">English to Hindi Translator</h1>
        
        <div className="mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter English text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={translateText}
            className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Translate
          </button>
          {translatedText && (
            <button
              onClick={speakText}
              className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Speak
            </button>
          )}
        </div>

        {error && (
          <div className="text-red-500 mb-4 text-center">{error}</div>
        )}

        {translatedText && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Translated Text (Hindi):</h2>
            <p className="p-2 bg-gray-100 rounded">{translatedText}</p>
          </div>
        )}

        <TranslationHistory history={history} clearHistory={clearHistory} />
      </div>
    </div>
  );
}

export default App;