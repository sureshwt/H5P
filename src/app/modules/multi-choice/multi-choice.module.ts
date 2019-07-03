import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutliChoiceComponent } from './mutli-choice/mutli-choice.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponentsModule } from '../common-components/common-components.module';

const routes: Routes = [
  {
    path: '',
    component: MutliChoiceComponent
  }
];

@NgModule({
  declarations: [MutliChoiceComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [MutliChoiceComponent]
})
export class MultiChoiceModule { }
