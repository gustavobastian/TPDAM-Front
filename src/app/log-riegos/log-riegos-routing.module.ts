import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogRiegosPage } from './log-riegos.page';

const routes: Routes = [
  {
    path: '',
    component: LogRiegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRiegosPageRoutingModule {}
