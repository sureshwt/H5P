import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentTypesService } from '../../../providers/services/content-types.service';
@Component({
  selector: 'app-generic-editor',
  templateUrl: './generic-editor.component.html',
  styleUrls: ['./generic-editor.component.scss']
})
export class GenericEditorComponent implements OnInit {
  allType : any;

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
