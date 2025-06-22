
const GEMINI_API_KEY = "AIzaSyDZczPQ0VX2dOVsVeX-CgW7vYbaVqL8c2Y";  // Your actual Gemini API key

async function generateFromGemini(prompt) {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await response.json();
  const result = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
  document.getElementById("result").innerText = result;
}
