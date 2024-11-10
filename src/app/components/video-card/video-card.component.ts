import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Video } from '../../model/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
  standalone: true,
  imports: [RouterLink],
})
export class VideoCardComponent {
  @Input() video!: Video;
}
