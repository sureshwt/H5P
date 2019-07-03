import { Component, OnInit } from '@angular/core';
import { ContentTypesService } from '../providers/services/content-types.service';

@Component({
  selector: 'app-content-types',
  templateUrl: './content-types.component.html',
  styleUrls: ['./content-types.component.scss']
})
export class ContentTypesComponent implements OnInit {

  allType : any;
  intervalId : any;
  constructor(private types : ContentTypesService) { }
  
  ngOnInit() {
   this.types.getcontentTypes().subscribe(data => {
     this.allType = data['libraries'];
   });
  }

  onSeletedType = function(item){
    console.log(item);
  }
  

}
