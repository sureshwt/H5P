import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateUploadComponent } from './create-upload/create-upload.component';
import { SearchComponent } from './search/search.component';
import { ContentTypesComponent } from './content-types/content-types.component';
import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { HttpClientModule } from '@angular/common/http';
// import { MultiChoiceModule } from './modules/multi-choice/multi-choice.module';
//import { CKEditorModule } from '@ckeditor/ckeditor5-build-classic/build/ckeditor.js';

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
    CommonComponentsModule,
    HttpClientModule,
    // MultiChoiceModule,
    //CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
