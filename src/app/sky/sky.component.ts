import { Component, OnInit } from '@angular/core';
import { BoundingBox } from 'angular5-canvas-drawer/lib/build/models/bounding-box';
import { DataStoreService, EditorToolType } from 'angular5-canvas-drawer/lib/build/drawer-library.module';


@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  public itemViewBox: BoundingBox = null;
  public handleMouseEvents: boolean;

  constructor(private _dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.handleMouseEvents = true;
    this._dataStoreService.selectedTool = EditorToolType.RECTANGLE_TOOL;
  }

}
