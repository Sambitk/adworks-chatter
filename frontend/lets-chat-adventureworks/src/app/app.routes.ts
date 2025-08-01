import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Settings } from './settings/settings';

export const routes: Routes = [
  // Define the default route. When the path is empty, it redirects to '/chat'.
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  // Define the route for the ChatComponent.
  { path: 'chat', component: Chat },
  // Define the route for the SettingsComponent.
  { path: 'settings', component: Settings },
  // Optional: A wildcard route to handle any undefined paths (e.g., for a 404 page).
  // { path: '**', component: PageNotFoundComponent },
];

