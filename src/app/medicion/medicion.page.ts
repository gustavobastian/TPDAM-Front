import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import {Medicion} from '../model/medicion';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {
  public idDispositivo: string;
  Mediciones: Array <Medicion> = new Array<Medicion>(); 
  
  constructor(private router: ActivatedRoute, public dispositivoServ: DispositivoService) { 
    this.idDispositivo='0';
  }

  ngOnInit() {
    this.idDispositivo = this.router.snapshot.paramMap.get('id');
    console.log('idDispositivo:'+this.idDispositivo);
    this.Mediciones= this.dispositivoServ.getAllMedicion(this.idDispositivo);
  }

}
