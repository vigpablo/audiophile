import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { RouterModule, Routes } from '@angular/router';
import { Zx7Component } from './zx7/zx7.component';
import { Zx9Component } from './zx9/zx9.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path:'',
    component: SpeakersComponent
  },
  {
    path:'zx7',
    component: Zx7Component
  },
  {
    path:'zx9',
    component: Zx9Component
  },

];


@NgModule({
  declarations: [
    SpeakersComponent,
    Zx7Component,
    Zx9Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeakersModule { }
