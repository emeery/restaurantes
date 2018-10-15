import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Restaurante} from '../model/restaurante';
import {RestauranteServicio} from '../services/restaurantes.services';
@Component({
  selector: 'app-agregarestaurante',
  templateUrl: './agregarestaurante.component.html',
  styleUrls: ['./agregarestaurante.component.css'],
  providers: []
})
export class AgregaRestauranteComponent implements OnInit {
  public titulo = 'Crea un Restaurante';
  public restaurante: Restaurante;
  constructor() { }

  ngOnInit() {
    this.restaurante = new Restaurante(0,"","","","null","bajo");
    console.log(this.restaurante);
  }

}
