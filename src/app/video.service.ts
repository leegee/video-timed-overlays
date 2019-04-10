import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  srcUri: string;

  constructor() { }

  setUri(srcUri: string): void {
    this.srcUri = srcUri;
  }
}
