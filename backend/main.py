from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import os

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), "model", "house_model.pkl")
model = joblib.load(model_path)

# Define input schema
class HouseInput(BaseModel):
    income: float
    age: float
    rooms: float
    bedrooms: float
    population: float

@app.post("/predict")
async def predict(input: HouseInput):
    features = np.array([[input.income, input.age, input.rooms, input.bedrooms, input.population]])
    prediction = model.predict(features)
    return {"predicted_price": round(prediction[0], 2)}
