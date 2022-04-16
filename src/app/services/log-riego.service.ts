import { Injectable } from '@angular/core';
import { LogRiegos } from '../model/logRiegos';

@Injectable({
  providedIn: 'root'
})
export class LogRiegoService {
  logRiegos: Array <LogRiegos> = new Array<LogRiegos>();

  constructor() { 

    this.logRiegos.push(new LogRiegos(1,0,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(2,1,'10/2/2022',2));
    this.logRiegos.push(new LogRiegos(3,0,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(4,1,'10/2/2022',1));
    this.logRiegos.push(new LogRiegos(5,0,'11/3/2022',1));
    this.logRiegos.push(new LogRiegos(6,0,'11/2/2022',2));

  }
  getLogRiegos(id): LogRiegos[]{
    return this.logRiegos;//filtering with *ngif
   };
   getLastLogRiegos(id): LogRiegos{
    return this.logRiegos.filter(logRiegos=> logRiegos.electrovalvulaId==id)[0];
   };
   modifyValveState(id): void{
    let aux=this.logRiegos.filter(logRiegos=> logRiegos.electrovalvulaId==id)[0];
    aux.apertura= (aux.apertura==0)? 1:0;
   }; 
}
