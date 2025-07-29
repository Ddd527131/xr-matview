from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = ["*"]  # à restreindre si besoin

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/materials")
def get_materials():
    with open("data/materials.json", "r") as f:
        data = json.load(f)
    return data
