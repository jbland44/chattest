# Cutwel technical support chatbot

## Run locally

Use Node.js 20+ and a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey):

```bash
GEMINI_API_KEY=your_key_here npm start
```

Open http://localhost:3000. You can alternatively set `OPENAI_API_KEY` to use OpenAI. If both are set, Gemini takes priority. The default Gemini model is `gemini-2.5-flash-lite`; override with `GEMINI_MODEL` if necessary. Set `PORT` for a different port.

## Render

This repository stores `server.js`, `index.html`, `app.js`, `style.css`, and `knowledge.md` at the repository root. Leave Root Directory empty and set Start Command to `npm start`. Add `GEMINI_API_KEY` under Environment and choose Save and deploy. Never add the key to GitHub or client-side code.

Gemini's free tier has usage limits and Google says free-tier content may be used to improve its products. For a customer-facing site, review the data handling terms and use a suitable paid tier if visitors may share confidential machining details.

Edit `knowledge.md` with verified Cutwel support content before public deployment. Add rate limits, monitoring, and approved privacy information. This prototype does not access live stock, pricing, or orders, and does not create support tickets.
