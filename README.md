# nova-translator-frontend

A simple web-based translator application that communicates with a backend translation API and can answer general questions by delegating them to ChatGPT.

+## Setup

 Clone the repository.
 Copy `config.js.example` to `config.js` and place your OpenAI API key in the file.
Serve `index.html` from a static server or open it directly in your browser.

config.js.example config.js
edit config.js and set window.OPENAI_API_KEY

The file `config.js` is ignored by git so your API key stays private.

Security

Never commit real API keys or other secrets to version control. Keep your personal `config.js` or any `.env` files out of the repository.

License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
