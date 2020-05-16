import { Component } from '@angular/core';
import { ApiEgoService } from './services/api-ego.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carga: boolean;

  constructor(
    private service : ApiEgoService
  ){

  }

  ngOnInit(): void {


  }

  onActivate(event) {
    window.scroll(0,0);

  }
}
