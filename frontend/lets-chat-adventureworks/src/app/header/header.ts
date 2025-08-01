import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // Input property to receive the header text from the parent component
  @Input() headerText: string = 'Ask Adventure-Works store';

  @Output() hamburgerClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();

  // Method to handle the hamburger menu click event
  onHamburgerClick() {
    console.log('Hamburger menu clicked!');
    // Add your logic here to open/close a side navigation or perform other actions
    this.hamburgerClick.emit();
  }

  // Method to handle the user profile icon click event
  onProfileClick() {
    console.log('User profile icon clicked!');
    this.profileClick.emit();
  }
}
