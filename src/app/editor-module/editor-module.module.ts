import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericEditorComponent } from './generic-editor/generic-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentTypesService } from './services/content-types.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [GenericEditorComponent],
  exports: [GenericEditorComponent],
  providers:[ContentTypesService]
})
export class EditorModuleModule { }
