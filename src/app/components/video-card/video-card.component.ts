import { Component, Input } from '@angular/core';
import { Video } from '../../model/video.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input() video!: Video;
}
