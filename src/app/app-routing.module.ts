import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dispositivo/:id',
    loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'medicion/:id',
    loadChildren: () => import('./medicion/medicion.module').then( m => m.MedicionPageModule)
  },
  {
    path: 'log-riegos/:id',
    loadChildren: () => import('./log-riegos/log-riegos.module').then( m => m.LogRiegosPageModule)
  },
  {
    path: 'electrovalvula/:id',
    loadChildren: () => import('./electrovalvula/electrovalvula.module').then( m => m.ElectrovalvulaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
