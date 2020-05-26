import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    CategoriaComponent
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
    CategoriaComponent
  ]
})
export class CategoriasModule { }
