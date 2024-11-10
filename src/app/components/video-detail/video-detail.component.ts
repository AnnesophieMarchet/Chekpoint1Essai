import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { VideoService } from '../../../services/video.service';
import { Video } from '../../model/video.model';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoDetailComponent implements OnInit {
  video: Video | undefined;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}
  ngOnInit(): void {
    const videoId = +this.route.snapshot.paramMap.get('id')!;
    this.videoService.getVideoById$(videoId).subscribe((video) => {
      this.video = video;
    });
  }
}
