import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
   

   urlApi="http://localhost:8000";

   constructor(private _http: HttpClient ) {
      
   }
   

   getListadoDispositivos():Promise<Dispositivo[]>{     
    return this._http.get(this.urlApi+ "/api/dispositivo/").toPromise().then((listado:Dispositivo[])=>{      
      return listado;
    });
  };

  getDispositivo(id): Promise<Dispositivo>{    
    return this._http.get(this.urlApi+"/api/dispositivo/"+id).toPromise().then((dispositivo:Dispositivo[])=>{
    console.log(dispositivo[0].nombre);
    return dispositivo[0];
    });
  };
  

  

};
