import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { TipoComponent } from './tipo/tipo.component';

@NgModule({
  declarations: [
    TipoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    TipoComponent
  ]
})
export class TiposModule { }
