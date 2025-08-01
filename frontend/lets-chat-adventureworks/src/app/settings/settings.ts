import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  constructor(private router: Router) {}
  goToChat() {
    this.router.navigate(['/chat']);
  }
}
