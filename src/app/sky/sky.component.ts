import { Component, OnInit } from '@angular/core';
import { BoundingBox } from 'angular5-canvas-drawer/lib/build/models/bounding-box';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  public viewBoxItem:BoundingBox;

  constructor() { }

  ngOnInit() {
  }

}
