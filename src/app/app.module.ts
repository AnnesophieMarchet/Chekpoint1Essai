import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPageComponent,
    VideoSearchComponent,
    VideoCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
