import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Segment',
      redirectTo: '/segment'
    }
  ];

  constructor() {}

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
