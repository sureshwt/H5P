import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
  @Input() editorId:string = '';
  public Editor:any = ClassicEditor;
  
  constructor() { }
  onReadyEditor(event, data){
    debugger;
    ClassicEditor
    .create( document.querySelector('#'+data.id), {
      toolbar: ['bold', 'italic','subscript','superscript', '|', 'bulletedList', 'numberedList', 'undo', 'redo','|', 'alignment'
      ,'|', 'heading'],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
          },
       styles:  { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
      colors: { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    })
    .then( editor => {
      console.log(editor.getData());
    })
    .catch( error => {
        console.error( error.stack );
    } );
  }

  

  saveEditor(){
      debugger;
      var val= this.Editor.instances['editorId'].getData();
  }
  ngOnInit() {
  
  }

	}
