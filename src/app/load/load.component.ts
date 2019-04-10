import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  videoUri: string;
  videoService: VideoService;

  constructor(
    videoService: VideoService
  ) {
    this.videoService = videoService;
  }

  ngOnInit() {
  }

  setUri(event: MouseEvent) {
    this.videoService.setUri((event.target as HTMLInputElement).value);
  }

}
