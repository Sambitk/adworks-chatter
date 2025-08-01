import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { User } from '../../models/user';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  templateUrl: './chat-message.html',
  styleUrl: './chat-message.css'
})
export class ChatMessage {
  @Input() message!: Message; 
  @Input() currentUser!: User; 

  isMyMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.message && this.currentUser) {
      this.isMyMessage = this.message.senderId === this.currentUser.id;
    }
  }
}
