import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarphonesComponent } from './earphones.component';
import { RouterModule, Routes } from '@angular/router';
import { Yx1Component } from './yx1/yx1.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: EarphonesComponent,
  },
  {
    path: 'yx1',
    component: Yx1Component,
  },

]


@NgModule({
  declarations: [
    EarphonesComponent,
    Yx1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EarphonesModule { }
