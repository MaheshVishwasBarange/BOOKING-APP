import { Routes } from '@angular/router';

export const BACKEND_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'hotels',
    loadChildren: () =>
      import('../hotels/hotels.module').then((m) => m.HotelsModule),
  },
];
