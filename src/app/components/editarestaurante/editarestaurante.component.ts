import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../../model/restaurante';
import {RestauranteServicio} from '../../services/restaurantes.services';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-editarestaurante',
  templateUrl: './editarestaurante.component.html',
  styleUrls: ['./editarestaurante.component.css'],
  providers: [RestauranteServicio]
})
export class EditaRestauranteComponent implements OnInit {
  public untitulo = 'Edita el Restaurante';
  public restaurante: Restaurante;
  public unstatus: string;
  public unerror: string;
  public archivoSubida;
  constructor(
    private restauranteServicio: RestauranteServicio,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.restaurante = new Restaurante(0, '', '', '', 'null', 'bajo');
    this.getRestaurante();
  }
  onSubmit() {
    this.route.params.forEach((params: Params) => {
       const id = params['id'];
       this.restauranteServicio.editRestaurante(id, this.restaurante)
       .subscribe( response => {
          this.router.navigate(['/']);
          if (this.unstatus !== 'success') {
            alert('error en el servidor');
          }
        },
        error => { this.unerror = <any>error;
          if (this.unerror !== null) {
              console.log(this.unerror);
              alert('Error en la petición');
            }
          }
        );
      });
  }
  getRestaurante() {
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.restauranteServicio.getRestaurante(id)
      .subscribe(
        response => {
          this.restaurante = response.data;
          console.log(this.restaurante);
          this.unstatus = response.status;
          if (this.unstatus !== 'success') {
            alert('error en el servidor');
          }
        },
        error => {
          this.unerror = <any>error;
          if (this.unerror !== null) {
            console.log(this.unerror);
            alert('error en la petición');
        }
      });
    });
  }
  llamarPrecio(value) {
    this.restaurante.precio = value;
    console.log(this.restaurante.precio);
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
