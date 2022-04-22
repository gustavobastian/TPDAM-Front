import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrovalvulaPageRoutingModule } from './electrovalvula-routing.module';

import { ElectrovalvulaPage } from './electrovalvula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectrovalvulaPageRoutingModule
  ],
  declarations: [ElectrovalvulaPage]
})
export class ElectrovalvulaPageModule {}
