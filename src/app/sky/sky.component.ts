import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

  public width:string = "600";
  public height:string = "400";
  public viewWidth:string = "500";
  public viewTop:string = "300";
  public viewHeight:string = "50";
  public viewLeft:string = "50";

  constructor() { }

  ngOnInit() {
  }

}
