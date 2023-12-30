import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./routes/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'game',
    loadChildren: () => import('./routes/game.routes').then(m => m.gameRoutes),
  },
  {
    path: 'results',
    loadChildren: () => import('./routes/results.routes').then(m => m.resultsRoutes),
  }
];
