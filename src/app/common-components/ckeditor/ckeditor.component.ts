import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  public Editor = ClassicEditor;
  public 
  
  constructor() { }
  onReadyEditor(data, event){
    ClassicEditor
    .create( document.querySelector('#editor'), {

    })
    .then( editor => {

    })
    .catch( error => {
        console.error( error.stack );
    } );
    event.preventDefault();
  }
  ngOnInit() {
  
  }

	}

