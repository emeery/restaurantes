import {Routes, RouterModule } from '@angular/router';
import {RestauranteListaComponent } from '../components/restaurantelista/restaurantelista.component';
import {RestauranteDetalleComponent } from '../components/restaurantedetalle/restaurantedetalle.component';
import {AgregaRestauranteComponent } from '../components/agregarestaurante/agregarestaurante.component';
import {EditaRestauranteComponent } from '../components/editarestaurante/editarestaurante.component';
import {NoEncontradoComponent } from '../components/noencontrado/noencontrado.component';
const routes: Routes = [
  {
    path: '',
    component: RestauranteListaComponent,
    pathMatch: 'full',
  },
  {
    path: 'restaurante',
    component: RestauranteDetalleComponent,
  },
  {
    path: 'restaurante/:id',
    component: RestauranteDetalleComponent,
  },
  {
    path: 'crea-restaurante',
    component: AgregaRestauranteComponent,
  },
  {
    path: 'edita-restaurante/:id',
    component: EditaRestauranteComponent,
  },
  {
    path: '404',
    component: NoEncontradoComponent,
  },
  {
    path: '**', 
    redirectTo: '404'
  }
];
export const routing = RouterModule.forRoot(routes);
