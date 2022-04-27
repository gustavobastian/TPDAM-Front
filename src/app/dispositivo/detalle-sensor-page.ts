import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
import { Medicion } from '../model/medicion';
import { MedicionService } from '../services/medicion.service';


@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor-page.html'
})

export class DetalleSensorPage implements OnInit {
  public medicionUltima: Medicion;
  
  
  public myChart;
  private valorObtenido=0;
  private chartOptions;
  

   @Input() sensorNumber : string;

  constructor(public medicionServ: MedicionService) {
     /*   
    setTimeout(()=>{
      console.log(this.medicionUltima);
      console.log(this.medicionUltima.valor);
      //this.valorObtenido=parseInt(this.medicionUltima.valor);
      console.log('Cambio el valor del sensor');
      //this.valorObtenido=60;
      this.valorObtenido=parseInt(this.medicionUltima.valor);
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },600);*/
  }

  ngOnInit() {
    console.log("este es el sensor:"+ this.sensorNumber);    
    
    this.generarChart(this.sensorNumber);
    this.llamoMedicion(this.sensorNumber);
    
    
  }

  ionViewDidEnter() {
    this.update();
  }

  generarChart(name: string) {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° '+name
        }
        ,credits:{enabled:false}
        ,pane: {
            startAngle: -150,
            endAngle: 150
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
          tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]
    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
   public update(){
     this.valorObtenido= parseInt( this.medicionUltima.valor);
     this.myChart.update({series: [{
      name: 'kPA',
      data: [this.valorObtenido],
      tooltip: {
          valueSuffix: ' kPA'
      }
  }]});
   }

   async llamoMedicion(idDispositivo: string){
    console.log("Estoy en llamando a la medicion");
    let local= await this.medicionServ.getLastMedicion(parseInt(idDispositivo)); 
    this.medicionUltima=local;          
    this.update();
   // this.sensor.setValorObtenido(parseInt(this.medicionUltima.valor));
   // window.location.reload();
  };


}

