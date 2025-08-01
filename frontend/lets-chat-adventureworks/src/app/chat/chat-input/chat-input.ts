import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  imports: [FormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.css'
})
export class ChatInput {
  messageText: string = '';

  @Output() sendMessageEvent = new EventEmitter<string>();
  @Output() fileAttached = new EventEmitter<File>();

  
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  constructor() { }

  sendMessage(): void {
    if (this.messageText.trim()) {
      this.sendMessageEvent.emit(this.messageText.trim());
      this.messageText = ''; // Clear the input field after sending
    }
  }

  // This method opens the file browser when the attach button is clicked
  openFileBrowser(): void {
    this.fileInput.nativeElement.click();
  }

  // This method is triggered when a file is selected
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
      this.fileAttached.emit(file); // Emit the selected file to the parent component
    }
  }
}
