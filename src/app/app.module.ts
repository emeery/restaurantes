import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {routing} from './routes/app.routes';

import { AppComponent } from './app.component';
import { RestauranteListaComponent } from './restaurantelista/restaurantelista.component';
import { RestauranteDetalleComponent } from './restaurantedetalle/restaurantedetalle.component';


@NgModule({
  declarations: [
    AppComponent,
    RestauranteListaComponent,
    RestauranteDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
