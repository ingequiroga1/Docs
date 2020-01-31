import { Component, OnInit, ViewChild } from '@angular/core';
import { Pregunta } from 'src/app/interfases/interfases';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  modo = 0;
  preguntas: Pregunta[] =
  [
    {
      "id_preg": 25,
      "desc": "Que le mencionaria a los padres sobre la situacion que padece su bebe",
      respuestas: [
      {'id': 1, 'desc': "require tratamiento quirurgico"},
      {'id': 2, 'desc': "Que no se preocupen  es un proceso  temporal"},
      {"id": 3, "desc":"Require estudio sanguineo Coombs  Directo"},
      {"id": 4, "desc":"Analisis en busca virus hepatico"}
      ],
      "resp_correcta": 2,
      "desccm": "Acude a su consulta  madre con su hijo de  3 dias de nacimiento refiere que  a notado cierta coloracion amarillenta,nacio por parto normal , sin complicaciones peso de 3220g , refiere come con normalida, uresis normala  , heces sin acolia, niega fiebre, ustede lo observa activo , reactivo,  reflejos dentro de los parametros normales.",
      "respuser": 0,
      "correcta": false
    },
    {
      "id_preg": 29,
      "desc": "Con los datos que tiene en que estadio clasifica esta enfermedad ",
      respuestas: [
        {'id': 1, 'desc': "Ia"},
        {'id': 2, 'desc': "IIa"},
        {"id": 3, "desc":"IIb"},
        {"id": 4, "desc":"IIIa"}
        ],
      "resp_correcta": 2,
      "desccm": "Paciente  RNPT  de 10 dias de vida extra uterina,el  caul lo llevan a urgencias por  presentar  poca tolerancia a los alimentos, distension abdominal,  asi como heces con sangre. A la asuculatacion encuentra disminuidos los ruidos intestinales, asi como bradicardias , temp 37. 5°C , solicita un Radiobrafia de abdomen donde observa  dilatacion de asas, datos de neumatosis , presencia de asa fija.",
      "respuser": 0,
      "correcta": false
    },
    {
      "id_preg": 28,
      "desc": "De los siguiente que  funciona como medida preventiva.",
      respuestas: [
        {'id': 1, 'desc': "Corticoides"},
        {'id': 2, 'desc': "Leche materna precoz  y corticoides"},
        {"id": 3, "desc":"Antibotico terapia profilaxica al nacimiento"},
        {"id": 4, "desc":"Leche  de formula deslactosada precoz"}
        ],
      "resp_correcta": 2,
      "desccm": "Paciente  RNPT  de 10 dias de vida extra uterina,el  caul lo llevan a urgencias por  presentar  poca tolerancia a los alimentos, distension abdominal,  asi como heces con sangre. A la asuculatacion encuentra disminuidos los ruidos intestinales, asi como bradicardias , temp 37. 5°C , solicita un Radiobrafia de abdomen donde observa  dilatacion de asas, datos de neumatosis , presencia de asa fija.",
      "respuser": 0,
      "correcta": false
    },
    {
      "id_preg": 23,
      "desc": "¿respecto al caso cual seria su diagnostico mas probable?",
      respuestas: [
        {'id': 1, 'desc': "Atresia de vias viliares"},
        {'id': 2, 'desc': "Ictericia fisiologica"},
        {"id": 3, "desc":"Isoinmunizacion"},
        {"id": 4, "desc":"Hepatitis A "}
        ],
      "resp_correcta": 2,
      "desccm": "Acude a su consulta  madre con su hijo de  3 dias de nacimiento refiere que  a notado cierta coloracion amarillenta,nacio por parto normal , sin complicaciones peso de 3220g , refiere come con normalida, uresis normala  , heces sin acolia, niega fiebre, ustede lo observa activo , reactivo,  reflejos dentro de los parametros normales.",
      "respuser": 0,
      "correcta": false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  Cambiarmodo(mod){
      console.log(this.preguntas);
      this.modo = mod;
  }


}

