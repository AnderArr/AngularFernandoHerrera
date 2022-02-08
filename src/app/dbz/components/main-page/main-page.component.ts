import { Component, OnInit } from '@angular/core';

import { Personaje } from '../../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  nuevoPersonaje: Personaje = {
    nombre: "Maestro MutenRoshi",
    poder: 1000
  }

}
