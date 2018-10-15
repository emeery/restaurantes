import { Routes, RouterModule } from '@angular/router';
import {RestauranteListaComponent } from '../restaurantelista/restaurantelista.component';
import {RestauranteDetalleComponent } from '../restaurantedetalle/restaurantedetalle.component';
import {AgregaRestauranteComponent} from '../agregarestaurante/agregarestaurante.component';
import {NoEncontradoComponent } from '../noencontrado/noencontrado.component';
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
    path: '404',
    component: NoEncontradoComponent,
  },
  {
    path: '**', 
    redirectTo: '404'
  }
];
export const routing = RouterModule.forRoot(routes);
