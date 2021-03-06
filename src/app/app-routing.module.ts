import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {SetupPageComponent} from "./pages/setup-page/setup-page.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
