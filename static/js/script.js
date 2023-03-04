const chat = document.getElementById("chat");
const form = document.getElementById("message-form");
const input = document.getElementById("message-input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = input.value;
  input.value = "";

  const response = await fetch("/chatbot/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message })
  });

  const data = await response.json();
  const responseText = data.response;

  const messageElement = document.createElement("p");
  messageElement.innerText = `You: ${message}`;
  chat.appendChild(messageElement);

  const responseElement = document.createElement("p");
  responseElement.innerText = `Chatbot: ${responseText}`;
  chat.appendChild(responseElement);
});
