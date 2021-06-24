import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
