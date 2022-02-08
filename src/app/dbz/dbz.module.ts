import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './components/main-page/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AgregarPersonajesComponent } from './components/agregar-personajes/agregar-personajes.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    AgregarPersonajesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
