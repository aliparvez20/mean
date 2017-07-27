import { Component, OnInit } from '@angular/core';
import { Video } from '../video'
import { VideoService } from "app/video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {
  selectedVideo: Video;
  videos: Array<Video>;

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  constructor(private _VideoService: VideoService) { }

  ngOnInit() {
    this._VideoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData)
  }
}
