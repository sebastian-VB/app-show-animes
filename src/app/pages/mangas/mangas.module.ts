import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { MangasComponent } from './mangas.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardModule } from 'src/app/shared/components/card/card.module';


@NgModule({
  declarations: [
    MangasComponent,
  ],
  imports: [
    CommonModule,
    MangasRoutingModule,
    HeaderModule,
    CardModule
  ]
})
export class MangasModule { }
