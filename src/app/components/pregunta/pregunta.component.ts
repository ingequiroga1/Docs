import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Pregunta } from '../../interfases/interfases';
import { IonRadioGroup, ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../../pages/modal-info/modal-info.page';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {

@ViewChild('ionradiogroup',{static: false}) radio: IonRadioGroup;

@Input() pre: Pregunta;
@Input() indice: number;
@Input() esCaptura = false;
@Output() respuesta = new EventEmitter();


  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  

  regRespuesta(ind: number) {
    // tslint:disable-next-line: radix
    this.respuesta.emit({res: parseInt(this.radio.value), ind: this.indice });
  }
  
  async lanzarModal(){
   const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
    componentProps: {
      'explicacion': this.pre.desccm
    }
    });

  await modal.present();

  }
}
