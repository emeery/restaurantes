import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Restaurante} from '../model/restaurante';
import {RestauranteServicio} from '../services/restaurantes.services';
@Component({
  selector: 'app-agregarestaurante',
  templateUrl: './agregarestaurante.component.html',
  styleUrls: ['./agregarestaurante.component.css'],
  providers: [RestauranteServicio]
})
export class AgregaRestauranteComponent implements OnInit {
  public titulo = 'Crea un Restaurante';
  public restaurante: Restaurante;
  public status: string;
  public unerror: string;
  constructor(
    private _restauranteServicio : RestauranteServicio,
    private route : ActivatedRoute,
    private router : Router
  ) { }
  ngOnInit() {
    this.restaurante = new Restaurante(0,"","","","null","bajo");
  }
  onSubmit() {
    this._restauranteServicio.addRestaurante(this.restaurante).subscribe(
      response => { 
        this.status = response.status;
        this.restaurante = response.data;
        if(this.status !== "success"){
          alert('error en el servidor');
        }
    },
    error => {
      this.unerror = <any>error;
      if(this.unerror !== null) {
        console.log(this.unerror);
        alert('error en la peticion');
      }
    }
    );
    this.router.navigate(["/"]);
  }
}
