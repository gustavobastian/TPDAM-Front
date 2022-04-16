import { Component } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';
import {DispositivoService} from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dispositivos: Array <Dispositivo> = new Array<Dispositivo>();
  constructor(public dispositivoServ: DispositivoService) {
    this.dispositivos=this.dispositivoServ.getAllDispositivo();
  }

}
