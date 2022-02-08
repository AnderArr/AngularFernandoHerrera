import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/dbz.interfaces';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html'
})
export class AgregarPersonajesComponent {

  @Input() nuevoPersonaje: Personaje = {nombre: "", poder: 0}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevoPersonaje.nombre.trim().length!==0){
      // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
      this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    }
    this.nuevoPersonaje = {nombre:"",poder:0}
    console.log(this.nuevoPersonaje);
  }

  constructor(private dbzService: DbzService){}
}
