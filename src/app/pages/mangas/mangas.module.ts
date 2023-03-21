import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { MangasComponent } from './mangas.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';


@NgModule({
  declarations: [
    MangasComponent,
  ],
  imports: [
    CommonModule,
    MangasRoutingModule,
    HeaderModule
  ]
})
export class MangasModule { }
