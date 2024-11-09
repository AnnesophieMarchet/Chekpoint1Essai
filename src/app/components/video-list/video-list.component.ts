import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../model/video.model';

import { VideoService } from '../../../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videos$: Observable<Video[]>;

  constructor(private videoService: VideoService) {
    this.videos$ = this.videoService.getVideoList$();
  }
}
