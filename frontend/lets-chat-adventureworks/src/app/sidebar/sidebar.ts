import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  // Input property to control whether the sidebar is open or closed
  @Input() isOpen: boolean = false;

  @Output() newChat = new EventEmitter<void>();
  @Output() settings = new EventEmitter<void>();

  // Method to handle click on the "New Chat" button
  onNewChatClick() {
    console.log('Sidebar: New Chat button clicked!');
    this.newChat.emit(); // Emit event to notify parent component
  }

  // Method to handle click on the "Settings" button
  onSettingsClick() {
    console.log('Sidebar: Settings button clicked!');
    this.settings.emit(); // Emit event to notify parent component
  }
}
