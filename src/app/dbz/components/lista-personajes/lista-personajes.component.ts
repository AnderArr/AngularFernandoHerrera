import { Component } from '@angular/core';

import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html'
})

export class ListaPersonajesComponent  {

  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService){
  }
}
