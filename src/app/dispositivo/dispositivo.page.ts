import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { DetalleSensorPage } from './detalle-sensor-page';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { MedicionService } from '../services/medicion.service';
import { ElectrovalvulaService } from '../services/electrovalvula.service';
import { LogRiegos } from '../model/logRiegos';
import { Electrovalvula } from '../model/electrovalve';
import { LogRiegoService } from '../services/log-riego.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {
  public loaded=0;
  public dispositivo: Dispositivo;
  public medicionUltima: Medicion;
  public idDispositivo: string;
  public number:string;
  public apertura=2;
  public ultimoLogRiegos: LogRiegos;
  public electrovalvula: Electrovalvula;
  
  

  constructor(private sensor: DetalleSensorPage,public electroServ: ElectrovalvulaService, public medicionesServ: MedicionService ,private router: ActivatedRoute, public dispositivoServ: DispositivoService, public medicionServ: MedicionService , public logRiegoServ: LogRiegoService) {

    setTimeout(()=>{
      this.llamoElectrovalvulaId();
      this.llamoLastLogRiegos();      
    },600);
    
   };

   ngOnInit(){
    this.idDispositivo = this.router.snapshot.paramMap.get('id');    
    this.number=this.idDispositivo;
    this.llamoDispositivo(this.idDispositivo);
    this.llamoMedicion(this.idDispositivo) ;   //this.metodo2(parseInt(this.idDispositivo));    
    
    console.log(this.dispositivo);    
    
   }

  async llamoDispositivo(idDispositivo: string){
    console.log("Estoy en llamando al dispositivo");
    let local= await this.dispositivoServ.getDispositivo(parseInt(idDispositivo));     
    console.log(local.nombre);
    this.dispositivo=local;   
    
   // window.location.reload();
  };
  async llamoMedicion(idDispositivo: string){
    console.log("Estoy en llamando a la medicion");
    let local= await this.medicionServ.getLastMedicion(parseInt(idDispositivo)); 
    this.medicionUltima=local;     
   this.loaded=1;   
     
   // this.sensor.setValorObtenido(parseInt(this.medicionUltima.valor));
   // window.location.reload();
  };
  
   botonElectrovalvula():void{
    
      console.log("Electrovalve change called");
      
      if(this.apertura==1){this.apertura=0;}
      else{this.apertura=1;}
  
      this.electroServ.modifyValveState(this.dispositivo.electrovalvulaId);
      console.log("apertura:"+this.apertura)
      if(this.apertura==1){
        this.llamoUltimaMedicionAsociada();
        this.medicionesServ.saveLastMedicion(this.medicionUltima);
  
      }
    }

    botonElectrovalvulaCerrar():void{
    
      console.log("Electrovalve close");
      this.apertura=1;
      this.electroServ.modifyValveState(this.dispositivo.electrovalvulaId);
      let nuevamedicion=(Math.floor(Math.random()*90+10));
      this.medicionUltima.valor=JSON.stringify(nuevamedicion);
      //this.llamoUltimaMedicionAsociada();
      this.medicionesServ.saveLastMedicion(this.medicionUltima);
      console.log(nuevamedicion);
      window.location.reload();
      
  
    }

    botonElectrovalvulaAbrir():void{
    
      console.log("Electrovalve Open");
      this.electroServ.modifyValveState(this.dispositivo.electrovalvulaId);
      this.apertura=0;
  
    }

  async llamoLastLogRiegos(){
    //  console.log("Estoy en el llamoLastLogRiegos y llame a los lastlogriegos");
      let local= await this.logRiegoServ.getLastLogRiegos(this.dispositivo.electrovalvulaId);    
      this.ultimoLogRiegos=local;   
      this.apertura=this.ultimoLogRiegos.apertura;   
      console.log(local); 
    }
  
    async llamoElectrovalvulaId(){
    //  console.log("Estoy en el llamoElectrovalvulaId y llame a la electrovalvula");
      let local2= await this.electroServ.getElectrovalve(this.dispositivo.electrovalvulaId);    
      this.electrovalvula=local2;
      
      console.log(local2); 
    }
    async llamoUltimaMedicionAsociada(){
      //  console.log("Estoy en el llamoLastLogRiegos y llame a los lastlogriegos");
        let local= await this.electroServ.getLastMedicion(this.dispositivo.electrovalvulaId);    
        this.medicionUltima=local;         
        console.log(local); 
      }
    
    async guardoUltimaMedicion(med: Medicion){
      this.medicionesServ.saveLastMedicion(med);
      console.log("DONE!");
    }  
    

}
