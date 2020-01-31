import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Pregunta } from 'src/app/interfases/interfases';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  respuesta: number;
  posicion: number;
  @Input() preguntas: Pregunta[] = [];
  @Output() emitresp = new EventEmitter();

  @ViewChild('slides1', { static: false }) slides: IonSlides;

  constructor() { }

  ngOnInit() {}

  cambia(event) {
    // console.log(event.target.swiper.activeIndex);
    this.posicion = event.target.swiper.activeIndex;
    // console.log(this.posicion);
  }

  getIndex(index: number) {
    this.respuesta = this.preguntas[index].respuser;
    this.slides.slideTo(index);
    // console.log(this.slides.getActiveIndex());
  }

  escuchaResp(resp) {
    debugger;
    this.preguntas[resp.ind].respuser = resp.res;
    if (resp.res === this.preguntas[resp.ind].resp_correcta) {
      this.preguntas[resp.ind].correcta = true;
    }
    console.log(this.preguntas);
  }

  finExamen(){
    console.log(1);
    this.emitresp.emit(1);
  }
}
