import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'rooms/list',
    component: RoomsListComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
