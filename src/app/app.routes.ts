import { Routes } from '@angular/router';
import { VideoPageComponent } from './components/video-page/video-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: VideoPageComponent },
  // { path: '**', component: ErrorComponent },
];
