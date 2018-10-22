import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from '../../services/restaurantes.services';
import {Router} from '@angular/router';
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
  public unstatus: string;
  public cargando;
  constructor(
    private restauranteServicio: RestauranteServicio,
    private router: Router,
    ) {}

  ngOnInit() {
    this.getRestaurantes();
  }
  getRestaurantes() {
    this.restauranteServicio.getRestaurantes()
    .subscribe( resultado => {
        this.restaurantes = resultado.data;
        this.unstatus = resultado.status;
        if (this.unstatus !== 'success') {
          alert('error en el servidor');
        }
        },
        error => {
          this.unerror = <any>error;
          if (this.unerror !== null ) {
            console.log(this.unerror);
          }
        }
    );
  }
  borrarRestaurante(id) {
    this.restauranteServicio.deleteRestaurante(id)
    .subscribe(response => {
      this.getRestaurantes();
      this.unstatus = response.status;
      if (this.unstatus !== 'success') {
        alert('error en el servidor');
      }
    },
    error => {
      this.unerror = <any>error;
      if (this.unerror !== null) {
        console.log(this.unerror);
        alert('error en la peticion');
      }
    }
    );
  }
}
