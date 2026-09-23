# Cutwel technical support chatbot

Run with Node.js 20+ and an OpenAI API key:

```bash
cd cutwel-chatbot
OPENAI_API_KEY=your_key_here npm start
```

Open http://localhost:3000. Set `PORT` and `OPENAI_MODEL` if needed. The API key stays on the server. The app uses the OpenAI Responses API and sends up to 12 recent chat messages with each request. Conversation text is held in browser memory only. The server sets `store: false` for API calls.

Edit `knowledge.md` with verified Cutwel support content. Before public deployment, add origin protection, rate limits, monitoring, an approved privacy notice, and a live catalogue or support integration if visitors need stock, order or product-specific answers. No enquiry is submitted from this prototype; handoff links take visitors to the Cutwel site.
