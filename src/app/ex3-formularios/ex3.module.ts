import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Ex3Component } from './ex3.component';

@NgModule({
  declarations: [Ex3Component],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [Ex3Component]
})
export class Ex3Module { }
