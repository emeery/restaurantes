import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from '../../services/restaurantes.services';

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
  public archivoSubida;
  constructor(
    private restauranteServicio: RestauranteServicio,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.restaurante = new Restaurante(0, '', '', '', 'null', 'bajo');
  }
  onSubmit() {
    this.restauranteServicio.addRestaurante(this.restaurante)
     .subscribe( response => {
          this.router.navigate(['/']);
          this.status = response.status;
          if (this.status !== 'success') {
            alert('Error en el servidor');
          }
        },
        error => {
          this.unerror = <any>error;
          if (this.unerror !== null) {
            console.log(this.unerror);
            alert('Error en la petición');
          }
        }
      );
  }
  llamarPrecio(valor) {
    this.restaurante.precio = valor;
  }
  archivoCambioEvent(fileInput: any) {
    this.archivoSubida = <Array<File>>fileInput.target.files;
    this.solicitudDeArchivo(
      'http://localhost/phpMyAdmin/api-rest/restaurantes-api.php/upload-file',
      [],
      this.archivoSubida)
    .then(resultado => {
      this.archivoSubida = resultado;
      this.restaurante.imagen = this.archivoSubida.filename ;
      console.log(this.restaurante.imagen);
    }, error => {
      console.log(error);
    });
  }
  solicitudDeArchivo(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formaData: any = new FormData();
      const xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formaData.append('uploads[]', files[i], files[i].name);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 ) {
              resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open('POST', url, true);
      xhr.send(formaData);
    });
  }
}
