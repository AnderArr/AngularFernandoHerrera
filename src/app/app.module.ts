import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './components/heroes/heroes.module';
import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

import { DbzService } from './dbz/services/dbz.service';


@NgModule({
  declarations: [
    AppComponent,
  ],  
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [
    DbzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
