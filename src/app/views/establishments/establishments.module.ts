import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsComponent } from './establishments.component';
import { EstablishmentsDetailComponent } from './establishments-detail/establishments-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    EstablishmentsComponent,
    EstablishmentsDetailComponent
  ],
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ToastrService
  ]
})
export class EstablishmentsModule { }
