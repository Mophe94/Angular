import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {Page404Component} from "./layout/page404/page404.component";

const routes: Routes = [
  // {path : "exo", loadChildren : () => import("./exo/exo.module").then(m => m.ExoModule)},
  // {path : "demo", loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule)},
  {path : "home", component : HomeComponent},
  {path : "404", component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
