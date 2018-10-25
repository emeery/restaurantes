import { Component, OnInit, OnDestroy } from '@angular/core';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from '../../services/restaurantes.services';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';
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
  // public cargando: boolean = false;
  // public subscripcion: Subscription;
  // public timer: Observable<any>;
  constructor(
    private restauranteServicio: RestauranteServicio,
    private router: Router,
    ) {}

  ngOnInit() {
    this.getRestaurantes();
  }
  // ngOnDestroy() {
  //   if ( this.subscripcion && this.subscripcion instanceof Subscription) {
  //     this.subscripcion.unsubscribe();
  //   }
  // }
  // setRetardo() {
  //   this.cargando = true;
  //   this.timer = Observable.timer(2000);
  //   this.subscripcion = this.timer.subscribe(() => {
  //     this.cargando = false;
  //   });
  // }
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
