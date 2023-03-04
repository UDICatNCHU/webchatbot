# FastAPI Chatbot Example

This is a simple example of a chatbot built using FastAPI and JavaScript.

## Requirements

To run this project, you'll need the following:

- Python 3.6 or later
- FastAPI
- Jinja2Templates
- A web browser

## Installation

To install the required dependencies, run the following command:

pip install fastapi jinja2


This will start the web server and make it accessible at http://localhost:8000.

To use the chatbot, open a web browser and navigate to http://localhost:8000. You should see a simple chat interface. Type a message in the input field and press "Send" to send it to the chatbot. The chatbot will generate a response based on your message and display it in the chat window.

## Implementation

The chatbot is implemented using FastAPI on the server side and JavaScript on the client side. The server code defines a simple `chatbot` endpoint that generates a response based on the message text sent by the client. The client code sends a `POST` request to the `chatbot` endpoint with the message text as a JSON payload, and displays the response in the chat window.

## Credits

This project was created by yfan. If you have any questions or comments, please feel free to contact me at [yfan@nchu.edu.tw].
