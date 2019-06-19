import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-build-classic';
import { HeaderComponent } from './header/header.component';
import { CreateUploadComponent } from './create-upload/create-upload.component';
import { SearchComponent } from './search/search.component';
import { ContentTypesComponent } from './content-types/content-types.component';
import { EditorModuleModule } from './modules/editor-module/editor-module.module';
import { CommonComponentsModule } from './modules/common-components/common-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateUploadComponent,
    SearchComponent,
    ContentTypesComponent,
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
