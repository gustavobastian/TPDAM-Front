import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { LogRiegos } from '../model/logRiegos';
import { LogRiegoPipePipe } from '../pipes/log-riego-pipe.pipe';
import { LogRiegoService } from '../services/log-riego.service';


@Component({
  selector: 'app-log-riegos',
  templateUrl: './log-riegos.page.html',
  styleUrls: ['./log-riegos.page.scss'],
})
export class LogRiegosPage  {
  public idDispositivo: string;
  logRiegos: Array <LogRiegos> = new Array<LogRiegos>();

  constructor(private router: ActivatedRoute, public logRiegosServ:LogRiegoService ,public dispositivoServ: DispositivoService) {
    
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.llamoLogRiegos();
   }

  async llamoLogRiegos(){
    console.log("Estoy en el llamoLogRiegos y llame a los logriegos");
    let local= await this.logRiegosServ.getLogRiegos(this.idDispositivo); 
    console.log(local);   
    this.logRiegos=local;    
  }
}
