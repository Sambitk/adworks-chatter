class Message:
    def __init__(self, content, sender_id, name, message_id):
        self.content = content
        self.sender_id = sender_id
        self.sender_name = name
        self.message_id = message_id

    def __repr__(self):
        return f"<Message {self.message_id} from {self.sender_name}({self.sender_id}): {self.content}>"


    def to_dict(self):
        return {
            "content": self.content,
            "sender_id": self.sender_id,
            "sender_name": self.sender_name,
            "message_id": self.message_id
        }
    