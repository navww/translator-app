import PropTypes from 'prop-types';

function TranslationHistory({ history, clearHistory }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Translation History</h2>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Clear History
          </button>
        )}
      </div>
      {history.length === 0 ? (
        <p className="text-gray-500">No translations yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item) => (
            <li key={item.id} className="p-2 bg-gray-50 rounded">
              <p><strong>English:</strong> {item.english}</p>
              <p><strong>Hindi:</strong> {item.hindi}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

TranslationHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      english: PropTypes.string.isRequired,
      hindi: PropTypes.string.isRequired,
    })
  ).isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export default TranslationHistory;