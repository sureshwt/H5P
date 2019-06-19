import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModuleModule } from './editor-module/editor-module.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-build-classic';
import { CommonComponentsModule } from './common-components/common-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModuleModule,
    CommonComponentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
