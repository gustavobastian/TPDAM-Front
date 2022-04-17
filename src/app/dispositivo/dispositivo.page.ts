import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { DetalleSensorPage } from './detalle-sensor-page';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';
import { Medicion } from '../model/medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage  {
  public loaded=0;
  public dispositivo: Dispositivo;
  public medicionUltima: Medicion;
  public idDispositivo: string;

  constructor(private router: ActivatedRoute, public dispositivoServ: DispositivoService, public medicionServ: MedicionService) {

    this.idDispositivo = this.router.snapshot.paramMap.get('id');    
    this.llamoDispositivo(this.idDispositivo);
    this.llamoMedicion(this.idDispositivo) ;   //this.metodo2(parseInt(this.idDispositivo));    
    
    console.log(this.dispositivo);    
   };


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
   // window.location.reload();
  };
  
  

}
