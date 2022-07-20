import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./welcome/welcome.component')
      .then((c) => c.WelcomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-routes').then((m) => m.DashboardRoutes)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
