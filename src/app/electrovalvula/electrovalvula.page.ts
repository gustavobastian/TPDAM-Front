import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { LogRiegos } from '../model/logRiegos'

@Component({
  selector: 'app-electrovalvula',
  templateUrl: './electrovalvula.page.html',
  styleUrls: ['./electrovalvula.page.scss'],
})
export class ElectrovalvulaPage implements OnInit {
  public idEvalvula: string;
  public ultimoLogRiegos: LogRiegos;
  public apertura=0;

  constructor(private router: ActivatedRoute, public dispositivoServ: DispositivoService) { }

  ngOnInit() {
    this.idEvalvula = this.router.snapshot.paramMap.get('id');
    console.log('idElectrovalvula:'+this.idEvalvula);
    this.ultimoLogRiegos= this.dispositivoServ.getLastLogRiegos(this.idEvalvula);
    this.apertura= this.ultimoLogRiegos.apertura;
  }

  public OnChange (){
    console.log("Electrovalve change called");
    this.dispositivoServ.modifyValveState(this.idEvalvula);
  }

}
