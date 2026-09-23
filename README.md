# Cutwel technical support chatbot

## Run locally

Use Node.js 20+ and a Groq API key from [GroqCloud](https://console.groq.com/keys) for faster responses:

```bash
GROQ_API_KEY=your_key_here npm start
```

Open http://localhost:3000. You can alternatively set `GEMINI_API_KEY` to use Gemini or `OPENAI_API_KEY` to use OpenAI. Provider priority is Groq, then Gemini, then OpenAI. The default Groq model is `llama-3.3-70b-versatile`; override with `GROQ_MODEL` if needed. The default Gemini model is `gemini-3.1-flash-lite`; override with `GEMINI_MODEL` if necessary. Set `PORT` for a different port.

## Render

This repository stores `server.js`, `index.html`, `app.js`, `style.css`, and `knowledge.md` at the repository root. Leave Root Directory empty and set Start Command to `npm start`. Add `GROQ_API_KEY` under Environment and choose Save and deploy. Never add the key to GitHub or client-side code.

Groq's free plan has request and token limits. Gemini's free tier also has usage limits and Google says free-tier content may be used to improve its products. For a customer-facing site, review the data handling terms and use a suitable paid tier if visitors may share confidential machining details.

Edit `knowledge.md` with verified Cutwel support content before public deployment. Add rate limits, monitoring, and approved privacy information. This prototype does not access live stock, pricing, or orders, and does not create support tickets.
