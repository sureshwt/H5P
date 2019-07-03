import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TitleComponent } from './title/title.component';
import { BehaviourSettingsComponent } from './behaviour-settings/behaviour-settings.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { OverallFeedbackComponent } from './overall-feedback/overall-feedback.component';
import { TypeConfirmDialogComponent } from './type-confirm-dialog/type-confirm-dialog.component';
import { MediaComponent } from './media/media.component';


@NgModule({
  declarations: [TitleComponent, BehaviourSettingsComponent, CkeditorComponent, OverallFeedbackComponent,TypeConfirmDialogComponent, MediaComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    TitleComponent, CkeditorComponent,BehaviourSettingsComponent,OverallFeedbackComponent,MediaComponent
  ]
})
export class CommonComponentsModule { }
