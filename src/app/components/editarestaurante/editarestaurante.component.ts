import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from "../../services/restaurantes.services";
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-editarestaurante',
  templateUrl: './editarestaurante.component.html',
  styleUrls: ['./editarestaurante.component.css'],
  providers: [RestauranteServicio]
})
export class EditaRestauranteComponent implements OnInit {
  public untitulo= 'Edita el Restaurante';
  public restaurante: Restaurante;
  public unstatus: string;
  public unerror: string;
  constructor(
    private _restauranteServicio : RestauranteServicio,
    private _route: ActivatedRoute,
    private _router : Router,
  ) {}

  ngOnInit() {
    this.restaurante = new Restaurante(0,"","","","null","bajo");
    this.getRestaurante();
  }
  onSubmit(){
		this._route.params.forEach((params: Params) => {
			 let id = params["id"];
			 this._restauranteServicio.editRestaurante(id, this.restaurante)
       .subscribe(
					response => { 
          this._router.navigate(["/"]);
          if(this.unstatus !== "success") {
            alert("error en el servidor");
          } 
        },
					error => {
						this.unerror = <any>error;
						if(this.unerror !== null){
							console.log(this.unerror);
							alert("Error en la petición");
						} 
					}
        
				);
		 });
	
		
	}
  getRestaurante() {
    this._route.params.forEach((params:Params)=> {
      let id = params["id"];
      this._restauranteServicio.getRestaurante(id)
      .subscribe( 
        response => {
          this.restaurante = response.data;
          console.log(this.restaurante);
          this.unstatus = response.status;
          if(this.unstatus !== "success") {
            alert("error en el servidor")
          }
        },
        error => {
          this.unerror = <any>error;
          if(this.unerror !== null) {
            console.log(this.unerror);
            alert("error en la petición")
        }
      });
    });  
  }
}
