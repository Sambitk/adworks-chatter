import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Chat } from './chat/chat';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('What Do you want to know about Adventure Works store?');
  currentTitle: string = 'Adventure Works - Ask the store';
  showSidebar: boolean = false;
  constructor(private router: Router) {}  
   
  onHamburgerClick() {
    console.log('Hamburger clicked - app.ts');
    this.showSidebar = !this.showSidebar; // Toggle sidebar visibility
  }
  onProfileClick() {
    console.log('Profile clicked - app.ts');
  }

  onNewChat() {
    console.log('New chat initiated - app.ts');
    this.router.navigate(['/chat']); // Navigate to chat page
  }

  onSettingsClick() {
    this.router.navigate(['/settings']); // Navigate to settings page
  }
}
