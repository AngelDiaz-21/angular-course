import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Es flexible, puede emitir strings, numeros, objetos, arreglos. En este caso lo que se quiere emitir es algo que luzca como un personaje (Character). EventEmitter es un generico, entonces podemos especificar el tipo de dato que fluye a través del objeto
  // Se pone el decorador Output. También se le puede cambiar el nombre que se quiera mostrar afuera, en este caso será characterOnNew. Dentro de esta clase será necesario utilizar el onNewCharacter
  @Output('characterOnNew')
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() : void{
    console.log(this.character);
    // Validacion, si el nombre es 0 se hace un return
    if(this.character.name.length === 0) return

    // Si pasa la validación se va a emitir algo (este objeto)
    this.onNewCharacter.emit(this.character);

    // Se crea un nuevo objeto y se asigna a character. Esto cambia la refencia al objeto character, por lo que angular detecta el cambio y actualiza la vista
    this.character = {name: '', power: 0};

  }

}
