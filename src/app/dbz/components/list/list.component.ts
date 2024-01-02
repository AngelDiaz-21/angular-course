import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  // Al poner el decorador @Input(), se indica que characterList va a recibir una property llamada characters. Si no mandan nada podemos enviar un valor por defecto, por ejemplo, el valor por defecto Trunks y su power, aunque también se puede envíar un valor por defecto vacío. Este proceso se realiza en el "main-page.component.html" y la property viene de "main-page.component.ts" y es un forma de pasar información entre componentes, en este caso del componente padre al componente hijo. También dentro del decorador Input se le puede asignar otro nombre para que sea usado en otro lado
  @Input()
  // public characterList: Character [] = [{
  //   name: 'Trunks',
  //   power: 10
  // }];
  public characterList: Character [] = [];

  @Output()
  public onDelete: EventEmitter <string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
    // console.log('Index del personaje', index + 1)
    if(!id) return;

    this.onDelete.emit(id);
  }
}
