import { Component } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import {DispositivoService} from '../services/dispositivo.service';
import { MydirectiveDirective } from '../directives/mydirective.directive'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dispositivos: Array <Dispositivo> = new Array<Dispositivo>();

  constructor(public dispositivoServ: DispositivoService) {    
    this.llamoService();
  }

  async llamoService(){
    console.log("Estoy en el llamoServicec y llame al service");
    let listado= await this.dispositivoServ.getListadoDispositivos();    
    this.dispositivos=listado;    
  }

  metodo2(){
    this.dispositivoServ.getListadoDispositivos().then((listado)=>{
      this.dispositivoServ.getDispositivo(listado[0].dispositivoId).then((valor2)=>{
        console.log(valor2);
      })
      this.dispositivos=listado;
      console.log(listado);
    });
  }

}
