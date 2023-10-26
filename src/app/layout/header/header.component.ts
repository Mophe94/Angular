import { Component } from '@angular/core';
import {Link} from "./Link";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  demo = new Link("demo",undefined,[new Link("directives","/demo/directives",undefined,true)],true)
  exo = new Link("exo",undefined,[new Link("chrono","/exo/chrono",undefined,true)],true)
  links : Link[] = [this.demo, this.exo];



}
