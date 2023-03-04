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
    body: JSON.stringify({ message: message })
  });

  const data = await response.json();
  const responseText = data.response;

  const messageElement = document.createElement("p");
  messageElement.innerText = `You: ${message}`;
  messageElement.classList.add("inputmsg");
  chat.appendChild(messageElement);

  const responseElement = document.createElement("p");
  responseElement.innerText = `Chatbot: ${responseText}`;
  responseElement.classList.add("response");
  chat.appendChild(responseElement);
  
});
