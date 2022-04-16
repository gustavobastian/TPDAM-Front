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
export class DispositivoPage implements OnInit {

  public dispositivo: Dispositivo;
  public medicionUltima: Medicion;
  constructor(private router: ActivatedRoute, public dispositivoServ: DispositivoService, public medicionServ: MedicionService) { }

  ngOnInit() {
    const idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+idDispositivo);
    this.dispositivo = this.dispositivoServ.getDispositivo(idDispositivo);
    this.medicionUltima=this.medicionServ.getLastMedicion(idDispositivo);
    console.log(this.dispositivo);
  }

  

}
