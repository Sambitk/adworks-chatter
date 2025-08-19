
from typing import Optional, List
from pydantic import BaseModel
from message import Message

class ChatRequest(BaseModel):
    sender_id: str
    sender_name: str
    user_query: str
    chat_history: Optional[List[Message]] = []


class ChatResponse(BaseModel):
    response_message: str
    full_chat_history: List[Message] =[]


