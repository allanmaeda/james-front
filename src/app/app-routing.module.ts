import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Devido a aplicação ser pequena, o uso do lazyloading é apenas ilustrativo.
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
