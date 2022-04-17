import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogRiegos } from '../model/logRiegos';

@Injectable({
  providedIn: 'root'
})
export class LogRiegoService {
  
  urlApi="http://localhost:8000";

  constructor(private _http: HttpClient) {     
  }
  
   
   modifyValveState(id): void{
    
    //aux.apertura= (aux.apertura==0)? 1:0;
   }; 

   getLastLogRiegos(id): Promise<LogRiegos>{    
    return this._http.get(this.urlApi+"/api/logriegos/"+id).toPromise().then((logriegos2:LogRiegos)=>{
      console.log('lastlog:'+logriegos2.fecha );
      return logriegos2;
    });
    }; 
   
    getLogRiegos(id):Promise <LogRiegos[]>{
    return this._http.get(this.urlApi+ '/api/logriegos/'+id+'/todos')
    .toPromise()    
    .then((logriegos2:LogRiegos[])=>{
      console.log(logriegos2);
      return logriegos2;
    });    
    };    
}
