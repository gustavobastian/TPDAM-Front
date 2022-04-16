import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
   private listado: Array <Dispositivo> = new Array<Dispositivo>();

   constructor() {
    this.listado.push(new Dispositivo(1,'canilla','frente',1));
    this.listado.push(new Dispositivo(2,'manguera','patio',2));
    
    console.log(this.listado[0]);
   }

   getDispositivo(id): Dispositivo{
    return this.listado.filter(dispositivo=> dispositivo.dispositivoId==id)[0];
   };
   getAllDispositivo(): Dispositivo[]{
    return this.listado;
   };
  

};
