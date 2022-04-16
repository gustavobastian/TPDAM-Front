import { Injectable } from '@angular/core';
import { Medicion } from '../model/medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  mediciones: Array <Medicion> = new Array<Medicion>();
  constructor() {

    this.mediciones.push(new Medicion(1,'10/1/2022','12346',1));
    this.mediciones.push(new Medicion(2,'10/1/2022','1226',2));
    this.mediciones.push(new Medicion(3,'10/1/2022','100',2));
    this.mediciones.push(new Medicion(4,'10/1/2022','1000',1));
   }

   getLastMedicion(id): Medicion{
    return this.mediciones.filter(medicion=> medicion.dispositivoId==id)[0];
   };
   getAllMedicion(id): Medicion[]{
    return this.mediciones;
   };
}
