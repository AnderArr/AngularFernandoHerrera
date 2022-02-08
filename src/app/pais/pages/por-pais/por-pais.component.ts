import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "HolaMundo";
  hayError: boolean = false;
  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
      .subscribe( resp => {
        if (resp.status == 404){
          this.hayError = true;
        }
        console.log('resp: ', resp);
        console.log('this.hayError : ',  this.hayError );
      } );
  }

}
