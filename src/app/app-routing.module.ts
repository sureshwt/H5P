import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MultiChoiceModule} from './modules/multi-choice/multi-choice.module';

const routes: Routes = [
  // { path: '', component: AppComponent },
  {path : 'multichoice', loadChildren :'src/app/modules/multi-choice/multi-choice.module#MultiChoiceModule'},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 