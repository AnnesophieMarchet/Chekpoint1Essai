import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPageComponent } from './components/video-page/video-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, VideoPageComponent],
})
export class AppComponent {
  title = 'Youtube Anne-Sophie';
}
