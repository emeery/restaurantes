import {Injectable} from '@angular/core';
import {Restaurante} from '../model/restaurante';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class RestauranteServicio {
    private URL_API =
    'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/restaurantes';
    constructor(private _http: Http) {}
    getRestaurantes() {
      return this._http.get(this.URL_API)
      .map(res => res.json());
    }
    getRestaurante(id: string) {
      return this._http.get(
        'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/restaurante/' + id)
          .map(res => res.json());
    }
    addRestaurante(restaurante: Restaurante) {
      const json = JSON.stringify(restaurante);
      const params = 'json=' + json;
      const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      return this._http.post(this.URL_API, params, {headers: headers})
            .map(res => res.json());
    }
    editRestaurante(id: string, restaurante: Restaurante) {
      const json = JSON.stringify(restaurante);
      const params = 'json=' + json;
      const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      return this._http.post(
        'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/update-restaurante/' + id,
        params, {headers: headers})
        .map(res => res.json());
    }
    deleteRestaurante(id: string) {
      return this._http.get('http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/delete-restaurante/' + id)
                .map(res => res.json());
    }
}
