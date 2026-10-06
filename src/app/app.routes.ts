import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./public/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
