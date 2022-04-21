import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { DetalleSensorPage } from './dispositivo/detalle-sensor-page';
import { MydirectiveDirective } from './directives/mydirective.directive'


@NgModule({
  declarations: [AppComponent, MydirectiveDirective ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},{provide:DetalleSensorPage, useClass: DetalleSensorPage}],
  bootstrap: [AppComponent],
})
export class AppModule {}
