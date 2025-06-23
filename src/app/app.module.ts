import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ex1Module } from './ex1-componentes/ex1.module';
import { Ex2Module } from './ex2-diretivas/ex2.module';
import { Ex3Module } from './ex3-formularios/ex3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, Ex1Module, Ex2Module, Ex3Module],
  bootstrap: [AppComponent]
})
export class AppModule { }
