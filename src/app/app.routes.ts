import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: VideoPageComponent },
  { path: '**', component: ErrorComponent },
];
