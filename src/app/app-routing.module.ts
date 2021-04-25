import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/establishments', pathMatch: 'full'},
  { path: 'establishments', loadChildren: () => import('./views/establishments/establishments.module').then(m => m.EstablishmentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
