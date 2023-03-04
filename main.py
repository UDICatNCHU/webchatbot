from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/chatbot/", response_class=JSONResponse)
async def chatbot(request: Request, message: dict):
    message_text = message.get("message")
    # Here you can implement your chatbot logic to generate a response based on the message
    # For example:
    if message_text.lower() == "hello":
        response_text = "Hi there!"
    else:
        response_text = "I didn't understand. Can you please rephrase your question?"

    # Return the chatbot response as a JSON object
    return {"response": response_text}