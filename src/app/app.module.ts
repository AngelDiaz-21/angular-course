// Primero deben de ir las importaciones de JS(si se tuvieran), importaciones de Angular, librerias de terceros y por último nuestro código
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // dentro de los import van los modules
  // Lo que se gano es que si tuvieramos más componentes dentro de la carpeta counter ya no importariamos nada más ya que esto ya estaría definido en el CounterModule
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
