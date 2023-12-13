import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadphonesComponent } from './headphones.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkiComponent } from './marki/marki.component';
import { MarkiiComponent } from './markii/markii.component';
import { Xx59Component } from './xx59/xx59.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HeadphonesComponent,
  },
  {
    path:'marki',
    component: MarkiComponent
  },
  {
    path:'markii',
    component: MarkiiComponent
  },
  {
    path:'xx59',
    component: Xx59Component
  }
]


@NgModule({
  declarations: [
    HeadphonesComponent,
    MarkiComponent,
    MarkiiComponent,
    Xx59Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HeadphonesModule { }
