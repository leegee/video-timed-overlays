import { Component, OnInit, DoCheck } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, DoCheck {

  srcUri: string;
  mimeType: string;
  videoService: VideoService;

  constructor(
    videoService: VideoService
  ) {
    this.videoService = videoService;
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.srcUri = this.videoService.srcUri;
  }

  onPlay() {

  }

}
