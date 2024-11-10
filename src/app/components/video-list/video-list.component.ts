import { Component, Input } from '@angular/core';
import { Video } from '../../model/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  @Input() videos!: Video[]; // Liste des vidéos reçue du composant parent
}
