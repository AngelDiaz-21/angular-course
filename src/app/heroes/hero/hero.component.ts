import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'ironman';
  public age:number = 24;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Batman';

  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 24;

    // Este código de javascript esta fuera del ciclo de detección de cambios de Angular, así que cada que presionemos este botón se cambiará el h1, pero ya no volverá a su estado original que era "Hola mundo"
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }

}
