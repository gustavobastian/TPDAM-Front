import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogRiegoService } from '../services/log-riego.service';
import { LogRiegos } from '../model/logRiegos'

@Component({
  selector: 'app-electrovalvula',
  templateUrl: './electrovalvula.page.html',
  styleUrls: ['./electrovalvula.page.scss'],
})
export class ElectrovalvulaPage  {
  public idEvalvula: string;
  public ultimoLogRiegos: LogRiegos;
  public apertura=0;

  constructor(private router: ActivatedRoute, public logRiegoServ: LogRiegoService) {
    this.idEvalvula = this.router.snapshot.paramMap.get('id');
    console.log('idElectrovalvula:'+this.idEvalvula);
    this.llamoLastLogRiegos();
    console.log(this.ultimoLogRiegos);
   }

  public OnChange (){
    console.log("Electrovalve change called");
    this.logRiegoServ.modifyValveState(this.idEvalvula);
  }

  async llamoLastLogRiegos(){
    console.log("Estoy en el llamoLastLogRiegos y llame a los lastlogriegos");
    let local= await this.logRiegoServ.getLastLogRiegos(this.idEvalvula);    
    this.ultimoLogRiegos=local;   
    console.log(local); 
  }
  
}
