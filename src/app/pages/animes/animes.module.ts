import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';


@NgModule({
  declarations: [
    AnimesComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    HeaderModule,
    CardModule,
    PaginationModule,
  ]
})
export class AnimesModule { }
