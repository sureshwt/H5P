import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})

export class MediaComponent implements OnInit {

  object:boolean = false; 
  constructor() { }

  ngOnInit() {
  }

  onClick(){
  this.object = !this.object;
  }
}
