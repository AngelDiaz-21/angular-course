import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Batman', 'Ironman', 'Superman'];
  public deletedHero?: string; //Será un valor opcional

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }

}
