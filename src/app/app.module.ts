import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { VideoSearchComponent } from './components/video-search/video-search.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPageComponent,
    VideoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
