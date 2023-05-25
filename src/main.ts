import 'zone.js/dist/zone';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component';

@Component({
  standalone: true,
  imports: [CommonModule, DragDropModule, CartComponent],
  template: `
    <h1>Hello from {{name}}!</h1>
   <app-cart> </app-cart>
   
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
