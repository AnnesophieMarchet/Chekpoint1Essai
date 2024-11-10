import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../app/model/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private API_LOCAL_JSON = 'assets/jsons/data.json';

  constructor(private http: HttpClient) {}

  //Retourne la liste complète des vidéos
  getVideoList$(): Observable<Video[]> {
    return this.http
      .get<{ videos: Video[] }>(this.API_LOCAL_JSON)
      .pipe(map((response) => response.videos));
  }

  // Retourne une vidéo par ID
  getVideoById$(id: number): Observable<Video | undefined> {
    return this.http
      .get<{ videos: Video[] }>(this.API_LOCAL_JSON)
      .pipe(
        map((response) => response.videos.find((video) => video.id === id))
      );
  }
  //Retourne une liste filtrée de vidéos en fonction d'une chaîne de caractères
  filteredVideoList$(chosenVideo: string): Observable<Video[]> {
    return this.getVideoList$().pipe(
      map((videos) =>
        videos.filter((video) =>
          video.title.toLowerCase().includes(chosenVideo.toLowerCase())
        )
      )
    );
  }
}
