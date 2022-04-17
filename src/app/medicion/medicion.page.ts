import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import {Medicion} from '../model/medicion';
import { MedicionService } from '../services/medicion.service';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage  {
  public idDispositivo: string;
  Mediciones: Array <Medicion> = new Array<Medicion>(); 
  
  constructor(private router: ActivatedRoute, public medicionesServ: MedicionService ,public dispositivoServ: DispositivoService) { 

    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.llamoMediciones();
  }
 

  async llamoMediciones(){
    console.log("Estoy en el llamoMediciones y llame a las mediciones");
    let local= await this.medicionesServ.getAllMedicion(this.idDispositivo);    
    this.Mediciones=local;    
  }

}
