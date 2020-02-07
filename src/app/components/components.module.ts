import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { IonicModule } from '@ionic/angular';
import { ModalInfoPage } from '../pages/modal-info/modal-info.page'
import { ModalInfoPageModule } from '../pages/modal-info/modal-info.module';

import { PipeTiempo } from '../pipes/tiempo.pipe';




@NgModule({
  declarations: [
    PreguntasComponent,
    PreguntaComponent,
    ResultadosComponent,
    PipeTiempo
  ],
  entryComponents:[
    ModalInfoPage
  ],
  exports: [
    PreguntasComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ModalInfoPageModule
  ]
})
export class ComponentsModule { }
