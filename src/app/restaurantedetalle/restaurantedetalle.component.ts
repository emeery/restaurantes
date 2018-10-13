import { Component, OnInit } from '@angular/core';
import {RestauranteServicio} from '../services/restaurantes.services';
import {Restaurante} from '../model/restaurante';
import { Location } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-restaurantedetalle',
  templateUrl: './restaurantedetalle.component.html',
  styleUrls: ['./restaurantedetalle.component.css'],
  providers: [RestauranteServicio]
})
export class RestauranteDetalleComponent implements OnInit {
  public parametro;
  public restaurante: Restaurante[];
	public unerror;
  constructor(
    private _restauranteServicio : RestauranteServicio,
    private route: ActivatedRoute ) {}

  ngOnInit() {
    this.getRestaurante();
  }
  getRestaurante(){
		this.route.params.forEach((params: Params) => {

			let id = params["id"];
			

			this._restauranteServicio.getRestaurante(id)
			.subscribe(
				response => {
						this.restaurante = response.data;
						console.log(this.restaurante);
				},
				error => {
					this.unerror = <any>error;
					
					if(this.unerror !== null){
						console.log(this.unerror);
						
					}
			});
		});
	}
}

