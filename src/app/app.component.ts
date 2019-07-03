import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H5P';
  isShow:boolean = true;
  contentType:boolean = true;
 
  showEditor(){
    this.isShow = false;
  }

  onActive(){
    this.contentType = false;
  }

  data(ev){debugger
    console.log(ev);
    
  }
}

