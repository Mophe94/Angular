import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';


@NgModule({
  declarations: [
    ChronometreComponent,
    ChronoFormatPipe
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
