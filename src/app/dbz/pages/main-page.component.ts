import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // Se hace la injection del service
  constructor( private dbzService: DbzService){}

  get characters(): Character[]{
    //Para este caso se usa el operador spreed para hacer una copia de la lista, de tal modo que la copia no afecte a la original
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character);
  }


}
