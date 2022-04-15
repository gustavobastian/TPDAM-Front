import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicionPage } from './medicion.page';

const routes: Routes = [
  {
    path: '',
    component: MedicionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicionPageRoutingModule {}
