import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'headphones',
    loadChildren: () => import('./headphones/headphones.module').then( m => m.HeadphonesModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./speakers/speakers.module').then( m => m.SpeakersModule)
  },
  {
    path: 'earphones',
    loadChildren: () => import('./earphones/earphones.module').then( m => m.EarphonesModule)
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
