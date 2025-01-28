import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'tutor',
        loadComponent: () => import('./tutor/tutor.page').then( m => m.TutorPage)
      },
      {
        path: 'user',
        loadComponent: () => import('./user/user.page').then( m => m.UserPage)
      },
      
      {
        path: 'booking',
        loadComponent: () => import('./booking/booking.page').then( m => m.BookingPage)
      }
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'user-details/:userId',
    pathMatch: 'full',
    loadComponent: () => import('./user/user.details.page').then( m => m.UserDetailsPage)
  }
  
];



