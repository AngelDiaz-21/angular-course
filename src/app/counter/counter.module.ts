import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations:[
    CounterComponent
  ],
  // Para que este componente (todo lo que esta dentro de la carpeta counter), pueda ser utilizado afuera del scope se debe de exportar
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}
