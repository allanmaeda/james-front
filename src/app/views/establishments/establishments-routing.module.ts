import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentsDetailComponent } from './establishments-detail/establishments-detail.component';

import { EstablishmentsComponent } from './establishments.component';

const routes: Routes = [
  { path: '', component: EstablishmentsComponent },
  { path: 'establishment-detail/:id', component: EstablishmentsDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsRoutingModule { }
