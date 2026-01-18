export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "No prompt" });

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBNH4KHflCGAReQ6oASTo-66Fzq_dYw_tY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: 