import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';
import { DetalleSensorPage } from './detalle-sensor-page';
import { ActivatedRoute } from '@angular/router';
import { Dispositivo } from '../model/dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  public dispositivo: Dispositivo;
  constructor(private router: ActivatedRoute, public dispositivoServ: DispositivoService) { }

  ngOnInit() {
    const idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+idDispositivo);
    this.dispositivo = this.dispositivoServ.getDispositivo(idDispositivo);
    console.log(this.dispositivo);
  }

}
