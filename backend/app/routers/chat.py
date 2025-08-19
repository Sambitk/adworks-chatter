from fastapi import APIRouter
from ..models.message import Message
from app.models.chat_models import ChatRequest, ChatResponse

router = APIRouter(tags=["Chat"])

@router.post("/chat")
async def handle_chat(request_body: ChatRequest):
    """
    Endpoint to handle chat queries.
    """
    # Here you would typically process the query and return a response.
    # For now, we will just echo the query back.
    return {"query": request_body.user_query}

