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

  getVideoList$(): Observable<Video[]> {
    return this.http
      .get<{ videos: Video[] }>(this.API_LOCAL_JSON)
      .pipe(map((response) => response.videos));
  }

  getVideoById$(url: string): Observable<Video | undefined> {
    return this.getVideoList$().pipe(
      map((videos) => videos.find((video) => video.url === url))
    );
  }

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
