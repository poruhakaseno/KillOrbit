import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SearchComponent} from "./search/search.component";
import {CreatePTNComponent} from "./create-ptn/create-ptn.component";
import {LoginComponent} from "./login/login.component";
import { UpdatePTNComponent } from './update-ptn/update-ptn.component';
import { PTNListDetailComponent } from './ptnlist-detail/ptnlist-detail.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {path:"profile",component: ProfileComponent},  
  {path:"search",component: SearchComponent},
  {path:"login",component: LoginComponent},
  {path:"createPTN",component: CreatePTNComponent},
  {path:"updatePTN",component: UpdatePTNComponent},
  {path:"displayPTN/:id",component: PTNListDetailComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
