import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrovalvulaPage } from './electrovalvula.page';

const routes: Routes = [
  {
    path: '',
    component: ElectrovalvulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectrovalvulaPageRoutingModule {}
