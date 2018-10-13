import { Routes, RouterModule } from '@angular/router';
import {RestauranteListaComponent} from '../restaurantelista/restaurantelista.component';
import {RestauranteDetalleComponent} from '../restaurantedetalle/restaurantedetalle.component';
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
  }
];
export const routing = RouterModule.forRoot(routes);
