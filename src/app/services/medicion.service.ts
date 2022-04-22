import { Injectable } from '@angular/core';
import { Medicion } from '../model/medicion';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  private mediciones2: Array <Medicion> = new Array<Medicion>();
  
  urlApi='http://localhost:8000';
  postId;

  constructor(private _http: HttpClient ) {
  }

   getLastMedicion(id): Promise<Medicion>{
    //return this.mediciones.filter(medicion=> medicion.dispositivoId==id)[0];
    return this._http.get(this.urlApi+"/api/medicion/"+id).toPromise().then((mediciones2:Medicion)=>{
      return mediciones2;
    });
    }; 
   
    getAllMedicion(id):Promise <Medicion[]>{
    return this._http.get(this.urlApi+ "/api/medicion/"+id+"/todas")
    .toPromise()    
    .then((mediciones2:Medicion[])=>{
      return mediciones2;
    });    
    }; 
    
    saveLastMedicion(med: Medicion) {
      //return this.mediciones.filter(medicion=> medicion.dispositivoId==id)[0];      
      console.log("guardando:"+med.dispositivoId);
      let output = (med);
      this._http.post<any>(this.urlApi+"/api/medicion/agregar",output).subscribe(data => {this.postId = data.id;});
      }; 
  
  }
 

