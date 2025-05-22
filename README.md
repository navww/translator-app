English to Hindi Translator
A single-page React application built with Vite and styled with Tailwind CSS that translates English text to Hindi using the MyMemory Translation API. The app features a history of the last 10 translations, a clear history option, and a speak functionality to pronounce translated text.
Features

Translation: Enter English text and get Hindi translations via the MyMemory API.
History: Stores up to 10 recent translations (English and Hindi).
Clear History: Option to reset the translation history.
Speak Functionality: Pronounces translated Hindi text using the Web Speech API (browser support required).
Error Handling: Displays errors for invalid input or API failures.
Responsive Design: Styled with Tailwind CSS for a clean, mobile-friendly UI.

Tech Stack

Frontend: React (18.2.0)
Build Tool: Vite (4.3.9)
Styling: Tailwind CSS (3.3.0)
API: MyMemory Translation API (free tier)
Dependencies: prop-types for type checking

Prerequisites

Node.js: Version 14.18.0 or higher
npm: Version 6 or higher (or Yarn/pnpm)
A modern browser with Web Speech API support for the speak feature (e.g., Chrome with Hindi voices).

Setup Instructions

Clone the Repository (if applicable):
git clone <repository-url>
cd translator-app


Install Dependencies:
npm install


Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure Tailwind:

Ensure tailwind.config.js includes:/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Ensure src/index.css includes:@tailwind base;
@tailwind components;
@tailwind utilities;




Run the Development Server:
npm run dev


Open http://localhost:5173 in your browser.


Build for Production (optional):
npm run build
npm run preview



Project Structure
translator-app/
├── src/
│   ├── components/
│   │   └── TranslationHistory.jsx  # Component for displaying translation history
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Tailwind CSS styles
│   ├── index.css                  # Tailwind directives
│   ├── main.jsx                   # React entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation

Usage

Translate Text:
Enter English text in the input field.
Click the Translate button to get the Hindi translation.


View History:
The last 10 translations are displayed in the history section.


Clear History:
Click Clear History to reset the translation list.


Speak Translated Text:
After translation, click Speak to hear the Hindi text (requires browser support for Web Speech API with hi-IN voices).


Error Handling:
Errors (e.g., empty input, API failure) appear in a red box above the translation output.



Notes

API: The MyMemory API is used for its free tier and no authentication requirement. It may have rate limits or varying translation quality. For production, consider a paid API like Google Translate.
Speak Functionality: Depends on browser support for the Web Speech API with Hindi voices (hi-IN). Test in Chrome for best results.
Extending Features:
Add language selection by modifying the langpair in the API call (e.g., en|fr for French).
Implement unit tests using Jest and React Testing Library for robustness.


Tailwind CSS: Customize the theme in tailwind.config.js for additional styling options.

Troubleshooting

Tailwind Classes Not Working:
Verify content paths in tailwind.config.js.
Ensure index.css is imported in main.jsx.
Run npm install and restart the dev server.


API Errors:
Check your internet connection.
Verify the MyMemory API endpoint (https://api.mymemory.translated.net).


Speak Feature Not Working:
Ensure your browser supports the Web Speech API and has Hindi voices installed.



License
This project is unlicensed and intended for educational purposes. Feel free to modify and distribute as needed.
Acknowledgments

Built with React, Vite, and Tailwind CSS.
Translation powered by MyMemory Translation API.

