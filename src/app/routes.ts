import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    title: 'Home',
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  }
]
