import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Pregunta } from '../../interfases/interfases';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {

@ViewChild('ionradiogroup',{static: false}) radio: IonRadioGroup;

@Input() pre: Pregunta;
@Input() indice: number;
@Output() respuesta = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  regRespuesta(ind: number) {
    // tslint:disable-next-line: radix
    this.respuesta.emit({res: parseInt(this.radio.value), ind: this.indice });
  }

}
