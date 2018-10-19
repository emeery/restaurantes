import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {routing} from './routes/app.routes';
import { AppComponent } from './app.component';
import { RestauranteListaComponent } from './components/restaurantelista/restaurantelista.component';
import { RestauranteDetalleComponent } from './components/restaurantedetalle/restaurantedetalle.component';
import { NoEncontradoComponent } from './components/noencontrado/noencontrado.component';
import { AgregaRestauranteComponent } from './components/agregarestaurante/agregarestaurante.component';
import { EditaRestauranteComponent } from './components/editarestaurante/editarestaurante.component';



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
