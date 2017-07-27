import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from "app/video";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs:['SelectVideo']
})
export class VideoListComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  onSelect(vid: Video){
    this.SelectVideo.emit(vid);
  }

  constructor() { }

  ngOnInit() {
  }

}
