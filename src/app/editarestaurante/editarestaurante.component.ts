import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../model/restaurante';
@Component({
  selector: 'app-editarestaurante',
  templateUrl: './editarestaurante.component.html',
  styleUrls: ['./editarestaurante.component.css']
})
export class EditaRestauranteComponent implements OnInit {
  public untitulo = 'Edita el Restaurante';
  public restaurante : Restaurante;
  constructor() { }

  ngOnInit() {
    this.restaurante = new Restaurante(0,"","","","null","bajo");
  }

}
