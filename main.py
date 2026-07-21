from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "This was deployed automatically using docker!"}

