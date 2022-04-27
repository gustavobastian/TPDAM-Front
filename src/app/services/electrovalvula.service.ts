import { Injectable } from '@angular/core';
import { Electrovalvula } from '../model/electrovalve';
import { HttpClient } from '@angular/common/http';
import { Medicion } from '../model/medicion';

@Injectable({
  providedIn: 'root'
})
export class ElectrovalvulaService {
  urlApi="http://localhost:8000";
  postId;
  constructor(private _http: HttpClient ) { }

  getListadoElectrovalvulas():Promise<Electrovalvula[]>{     
    return this._http.get(this.urlApi+ "/api/electrovalvula/").toPromise().then((listado:Electrovalvula[])=>{      
      return listado;
    });
  };

  getElectrovalve(id): Promise<Electrovalvula>{    
    return this._http.get(this.urlApi+"/api/electrovalvula/"+id).toPromise().then((electrovalvula:Electrovalvula[])=>{
    //console.log('electrovalvula:'+electrovalvula[0].nombre);
    return electrovalvula[0];
    });
  };

  modifyValveState(id): void{
    let res= this._http.put<any>(this.urlApi+"/api/electrovalvula/"+id,"{}").subscribe(data=>this.postId=data.id );

    console.log(res);
   //aux.apertura= (aux.apertura==0)? 1:0;
  }; 

  getLastMedicion(id): Promise<Medicion>{     
    return this._http.get(this.urlApi+"/api/electrovalvula/"+id+"/medicion")
    .toPromise()
    .then((mediciones2: Medicion[])=>{
      return mediciones2[0];
    });
    }; 


}
