from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="APIs to manage user queries for Adventure Works store",
    description="These API allows users to manage their queries related to the Adventure Works store.",
    version="1.0.0",
)

origins = [
    "http://localhost",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Define a root endpoint for basic health checks
@app.get("/")
def read_root():
    return {"message": "Welcome to the Adventure Works API!"}

app.include_router()