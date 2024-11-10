import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video.service';
import { Video } from '../../model/video.model';
import { VideoSearchComponent } from '../video-search/video-search.component';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.scss',
  standalone: true,
  imports: [VideoSearchComponent, VideoListComponent],
})
export class VideoPageComponent implements OnInit {
  videos: Video[] = []; // Liste des vidéos

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideoList$().subscribe((videos: Video[]) => {
      this.videos = videos;
    });
  }
}
