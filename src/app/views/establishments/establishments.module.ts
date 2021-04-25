import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';
import { EstablishmentsDetailComponent } from './establishments-detail/establishments-detail.component';


@NgModule({
  declarations: [
    EstablishmentsComponent,
    EstablishmentsDetailComponent
  ],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
  ]
})
export class EstablishmentsModule { }
