import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PreguntasComponent,
    PreguntaComponent,
    ResultadosComponent
  ],
  exports: [
    PreguntasComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
