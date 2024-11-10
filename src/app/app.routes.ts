import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoPageComponent } from './components/video-page/video-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', component: VideoPageComponent },
  { path: 'video/:id', component: VideoDetailComponent },
  { path: '**', component: ErrorComponent },
];
