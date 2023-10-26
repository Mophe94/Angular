import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesComponent} from "./components/directives/directives.component";

const routes: Routes = [
  {path :'directives', component : DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }