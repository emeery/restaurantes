import {Injectable} from '@angular/core';
import {Restaurante} from '../model/restaurante';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestauranteServicio {
    private URL_API =
    'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/restaurantes';
    private URL_ID = 
    'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/restaurante/';
    
    constructor(private _http: Http) {}
    getRestaurantes() {
      return this._http.get(this.URL_API)
      .map(res => res.json() );
    }
    getResturante(id: string) {
      return this._http.get(this.URL_ID + id)
      .map(res => res.json() );
    }
}
