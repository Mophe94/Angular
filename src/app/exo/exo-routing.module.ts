import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronometreComponent} from "./components/chronometre/chronometre.component";

const routes: Routes = [
  {path : "chrono",component : ChronometreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
