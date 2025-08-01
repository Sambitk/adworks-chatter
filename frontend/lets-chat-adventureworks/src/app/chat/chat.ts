import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/message';
import { User } from '../models/user';
import { ChatMessage } from './chat-message/chat-message';
import { ChatInput } from './chat-input/chat-input';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, ChatMessage, ChatInput],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  chatMessages: Message[] = [];
  currentUser: User = { id: 1, name: 'You' };
  constructor(private router: Router) {} 

  ngOnInit(): void {
    // Populate with some initial dummy data for demonstration
    this.chatMessages = [
      { senderId: 1, senderName: 'You', text: 'Hello, how are you?', timestamp: new Date() },
      { senderId: 2, senderName: 'Jane Smith', text: 'I am doing well, thanks!', timestamp: new Date() },
      { senderId: 1, senderName: 'You', text: 'That\'s great!', timestamp: new Date() },
      { senderId: 3, senderName: 'Alex Johnson', text: 'Hi everyone.', timestamp: new Date() },
    ];
  }

  /**
   * Handles the sendMessageEvent from the chat-input component.
   * @param messageText The string content of the new message.
   */
  handleSendMessage(messageText: string): void {
    const newMessage: Message = {
      senderId: this.currentUser.id,
      senderName: this.currentUser.name,
      text: messageText,
      timestamp: new Date()
    };
    this.chatMessages.push(newMessage);
  }

  /**
   * Handles the attachFileEvent from the chat-input component.
   */
  handleAttachFile(): void {
    console.log('File attachment logic would go here.');
  }
}
