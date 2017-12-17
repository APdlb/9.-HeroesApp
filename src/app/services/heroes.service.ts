import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Heroe } from "../interfaces/heroe.interface";
import "rxjs/Rx";

@Injectable()
export class HeroesService {

  servicioURL:string = "https://heroesapp-7af76.firebaseio.com/heroes";

  constructor( private http:Http ) {

  }

  getServiceUrl( parametros?:string[] ):string {
    let url:string = this.servicioURL;
    if ( parametros ) {
      for (let key in parametros) {
        url = `${ url }/${ parametros[key] }`
      }
    }
    url = `${ url }.json`;
    return url;
  }

  nuevoHeroe( heroe:Heroe ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-type':'application/json'
    });

    return this.http.post( this.getServiceUrl( null ), body, { headers } )
      .map( res => {
          return res.json();
      });
  }

  actualizarHeroe( heroe:Heroe, key$:string ) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-type':'application/json'
    });

    return this.http.put( this.getServiceUrl( [key$] ), body, { headers } )
      .map( res => {
          return res.json();
      });
  }

  getHeroe( key$:string ) {
    return this.http.get( this.getServiceUrl( [key$] ) )
      .map( res => {
          return res.json();
      });
  }

  getHeroes() {
    return this.http.get( this.getServiceUrl( null ) )
      .map( res => {
          return res.json();
      });
  }

  borrarHeroe( key$:string ) {
    return this.http.delete( this.getServiceUrl( [key$] ) )
      .map( res => {
          return res.json();
      });
  }

}
