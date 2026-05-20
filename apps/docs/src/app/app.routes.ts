import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home-page').then(m => m.HomePage),
  },
  {
    path: 'theming',
    loadComponent: () => import('./pages/theming/theming-page').then(m => m.ThemingPage),
  },
  {
    path: 'components/card',
    loadComponent: () => import('./pages/card/card-page').then(m => m.CardPage),
  },
];
