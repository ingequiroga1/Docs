import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../../interfases/interfases';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
})
export class ResultadosComponent implements OnInit {
@Input() respreguntas: Pregunta[] = [];

  constructor() { }

  ngOnInit() {}

}
