import { Component, Input } from '@angular/core';
import { Video } from '../../model/video.model';
import { NgFor } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  standalone: true,
  imports: [NgFor, VideoCardComponent]
})
export class VideoListComponent {
  @Input() videos!: Video[]; // Liste des vidéos reçue du composant parent
}
