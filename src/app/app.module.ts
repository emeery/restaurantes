import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {routing} from './routes/app.routes';
import { AppComponent } from './app.component';
import { RestauranteListaComponent } from './restaurantelista/restaurantelista.component';
import { RestauranteDetalleComponent } from './restaurantedetalle/restaurantedetalle.component';
import { NoEncontradoComponent } from './noencontrado/noencontrado.component';
import { AgregaRestauranteComponent } from './agregarestaurante/agregarestaurante.component';
import { EditaRestauranteComponent } from './editarestaurante/editarestaurante.component';



@NgModule({
  declarations: [
    AppComponent,
    RestauranteListaComponent,
    RestauranteDetalleComponent,
    NoEncontradoComponent,
    AgregaRestauranteComponent,
    EditaRestauranteComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule, routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
