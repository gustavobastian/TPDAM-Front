import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { LogRiegos } from '../model/logRiegos';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
   listado: Array <Dispositivo> = new Array<Dispositivo>();
   mediciones: Array <Medicion> = new Array<Medicion>();
   logRiegos: Array <LogRiegos> = new Array<LogRiegos>();

   constructor() {
    this.listado.push(new Dispositivo(1,'canilla','frente',1));
    this.listado.push(new Dispositivo(2,'manguera','patio',2));
    this.listado.push(new Dispositivo(3,'manguerita','techo',3));
    this.listado.push(new Dispositivo(4,'bacha','cocina',4));


    this.mediciones.push(new Medicion(1,'10/1/2022','12346',1));
    this.mediciones.push(new Medicion(2,'10/1/2022','1226',2));
    this.mediciones.push(new Medicion(3,'10/1/2022','100',2));
    this.mediciones.push(new Medicion(4,'10/1/2022','1000',1));

    this.logRiegos.push(new LogRiegos(1,1,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(2,1,'10/2/2022',2));
    this.logRiegos.push(new LogRiegos(3,0,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(4,1,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(5,0,'11/2/2022',1));
    this.logRiegos.push(new LogRiegos(6,0,'11/2/2022',2));

    console.log(this.listado[0]);
   }

   getDispositivo(id): Dispositivo{
    return this.listado.filter(dispositivo=> dispositivo.dispositivoId==id)[0];
   };
   getLogRiegos(id): LogRiegos[]{
    return this.logRiegos;//filtering with *ngif
   };
   getLastMedicion(id): Medicion{
    return this.mediciones.filter(medicion=> medicion.dispositivoId==id)[0];
   };
   getAllMedicion(id): Medicion[]{
    return this.mediciones;
   };

};
