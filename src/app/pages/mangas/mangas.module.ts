import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { MangasComponent } from './mangas.component';


@NgModule({
  declarations: [
    MangasComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule
  ]
})
export class MangasModule { }
