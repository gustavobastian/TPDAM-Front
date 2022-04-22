import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogRiegoService } from '../services/log-riego.service';
import { ElectrovalvulaService } from '../services/electrovalvula.service';
import { MedicionService } from '../services/medicion.service';
import { LogRiegos } from '../model/logRiegos';
import { Electrovalvula } from '../model/electrovalve';
import { Medicion } from '../model/medicion';



@Component({
  selector: 'app-electrovalvula',
  templateUrl: './electrovalvula.page.html',
  styleUrls: ['./electrovalvula.page.scss'],
})
export class ElectrovalvulaPage  {
  public idEvalvula: string;
  public ultimoLogRiegos: LogRiegos;
  public apertura=0;
  public electrovalvula: Electrovalvula;
  public medicionLocal: Medicion;

  constructor(private router: ActivatedRoute,public electroServ: ElectrovalvulaService , public medicionesServ:MedicionService ,public logRiegoServ: LogRiegoService) {
    this.idEvalvula = this.router.snapshot.paramMap.get('id');
   // console.log('idElectrovalvula:'+this.idEvalvula);
    this.llamoLastLogRiegos();
   // console.log(this.ultimoLogRiegos);
    this.llamoElectrovalvulaId();
   }

  public OnChange (){
    console.log("Electrovalve change called");
    
    if(this.apertura==1){this.apertura=0;}
    else{this.apertura=1;}

    this.electroServ.modifyValveState(this.idEvalvula);
    console.log("apertura:"+this.apertura)
    if(this.apertura==1){
      this.llamoUltimaMedicionAsociada();
      this.medicionesServ.saveLastMedicion(this.medicionLocal);

    }
  }

  async llamoLastLogRiegos(){
  //  console.log("Estoy en el llamoLastLogRiegos y llame a los lastlogriegos");
    let local= await this.logRiegoServ.getLastLogRiegos(this.idEvalvula);    
    this.ultimoLogRiegos=local;   
    this.apertura=this.ultimoLogRiegos.apertura;   
    console.log(local); 
  }

  async llamoElectrovalvulaId(){
  //  console.log("Estoy en el llamoElectrovalvulaId y llame a la electrovalvula");
    let local2= await this.electroServ.getElectrovalve(this.idEvalvula);    
    this.electrovalvula=local2;
    
    console.log(local2); 
  }
  async llamoUltimaMedicionAsociada(){
    //  console.log("Estoy en el llamoLastLogRiegos y llame a los lastlogriegos");
      let local= await this.electroServ.getLastMedicion(this.idEvalvula);    
      this.medicionLocal=local;         
      console.log(local); 
    }
  
  async guardoUltimaMedicion(med: Medicion){
    this.medicionesServ.saveLastMedicion(med);
    console.log("DONE!");
  }  
  
}
