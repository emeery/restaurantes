import { Component, OnInit } from '@angular/core';
import {RestauranteServicio} from '../services/restaurantes.services';
import {Restaurante} from '../model/restaurante';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurantedetalle',
  templateUrl: './restaurantedetalle.component.html',
  styleUrls: ['./restaurantedetalle.component.css'],
  providers: [RestauranteServicio]
})
export class RestauranteDetalleComponent implements OnInit {
  public parametro;
  public restaurante: Restaurante;
  
  constructor(
    private _restauranteServicio : RestauranteServicio,
    private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parametro = params['id'];
    });
    this.getRestaurante();
  }
  getRestaurante() {
    
    this._restauranteServicio.getRestaurante(id)
    .subscribe(response => {
      this.restaurante = response.data;
    });
  }
}

