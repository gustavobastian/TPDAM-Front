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
export class LogRiegosPage implements OnInit {
  public idDispositivo: string;
  logRiegos: Array <LogRiegos> = new Array<LogRiegos>();

  constructor(private router: ActivatedRoute, public logRiegosServ:LogRiegoService ,public dispositivoServ: DispositivoService) {
    this.idDispositivo='0';
   }

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.logRiegos= this.logRiegosServ.getLogRiegos(this.idDispositivo) ;
  }

}
