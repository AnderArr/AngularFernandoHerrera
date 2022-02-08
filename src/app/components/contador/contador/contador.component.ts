import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ContadorComponent {
  titulo: string = 'Contado App';
  numero: number = 10;
  base  : number = 5;

  // base: number = 5;
  
  acumular( valor: number){
    this.numero +=valor;
  }

}
