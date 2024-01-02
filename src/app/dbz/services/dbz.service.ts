import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // Este método va a recibir un character del tipo Character "es una interface"
  addCharacter(character: Character):void{
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // };

    // Esto es lo mismo que arriba, pero de esta forma nos evitamos de desestructurar cada una de sus propiedades, sino todas usado el operador spreed
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacterById(index: number){
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id:string){
    // Esta forma permite devolver un nuevo arreglo en donde no se encuentre el elemento seleccionado, de esta forma se puede simular que se borro el elemento
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
