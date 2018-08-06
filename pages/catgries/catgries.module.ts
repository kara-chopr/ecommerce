import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatgriesPage } from './catgries';

@NgModule({
  declarations: [
    CatgriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CatgriesPage),
  ],
})
export class CatgriesPageModule {}
