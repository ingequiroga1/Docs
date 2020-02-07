import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Pregunta } from 'src/app/interfases/interfases';
import { Time } from '@angular/common';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  respuesta: number;
  posicion: number;
  aciertos = 0; 
  tiempo: Time;
  minutos = '00';
  horas = '00';
  @Input() preguntas: Pregunta[] = [];
  @Output() emitresp = new EventEmitter();


  @ViewChild('slides1', { static: false }) slides: IonSlides;

  constructor() { }

  ngOnInit() {
    let seg = 0;
    this.tiempo = {hours: 0, minutes: 0};
    setInterval(() => {
      seg++;
      console.log(seg);
      if (seg === 60) {
        if( this.tiempo.minutes < 60 ){
          this.tiempo.minutes = this.tiempo.minutes + 1;
          if(this.tiempo.minutes < 10){
            this.minutos = '0' + this.tiempo.minutes;
          }
          else{
            this.minutos = this.tiempo.minutes.toString();
          }
        }
        else
        {
          if(this.tiempo.hours < 10){
            this.horas = '0' + this.tiempo.hours;
          }
          else{
            this.horas = this.tiempo.hours.toString();
          }
          this.tiempo.hours = this.tiempo.hours + 1;
        }
        seg = 0;
      }
      }, 1000);
  }

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
    this.preguntas[resp.ind].respuser = resp.res;
    if (resp.res === this.preguntas[resp.ind].resp_correcta) {
      this.preguntas[resp.ind].correcta = true;
      this.aciertos++;
    }
  }

  finExamen(){
    console.log(this.aciertos);
    this.emitresp.emit(this.aciertos);
  }
}
