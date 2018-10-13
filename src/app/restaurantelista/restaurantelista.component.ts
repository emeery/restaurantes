import { Component, OnInit } from '@angular/core';
import {RestauranteServicio} from '../services/restaurantes.services';
import {Restaurante} from '../model/restaurante';
@Component({
  selector: 'app-restaurantelista',
  templateUrl: './restaurantelista.component.html',
  styleUrls: ['./restaurantelista.component.css'],
  providers: [RestauranteServicio]
})
export class RestauranteListaComponent implements OnInit {
  public titulo: 'Listado de Restaurantes';
  public restaurantes: Restaurante;
  public unerror: string;
  public cargando;
  constructor(private restauranteServicio: RestauranteServicio) {}

  ngOnInit() {

    this.restauranteServicio.getRestaurantes()
      .subscribe( resultado => {

        this.restaurantes = resultado.data;
        },
        error => {
          this.unerror = <any>error;
          if (this.unerror !== null ) {
            console.log(this.unerror);
          }
        }
      );
  }
  verDetalleRestaurante() {

    console.log('ver informacion');
  }

}
