import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Se pone un array porque se pueden agregar más estilos
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';

}
