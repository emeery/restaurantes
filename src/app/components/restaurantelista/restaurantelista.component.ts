import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from "../../services/restaurantes.services";
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
        this.restaurantes = resultado.data; },
        error => {
          this.unerror = <any>error;
          if (this.unerror !== null ) {
            console.log(this.unerror);
          }
        }
    );
    this.verDetalleRestaurante();
  }
  verDetalleRestaurante() {
    console.log('lista de restaurantes');
  }

}
