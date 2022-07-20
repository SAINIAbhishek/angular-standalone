import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'today',
    loadComponent: () => import('./today/today.component').then((c) => c.TodayComponent)
  }
];
