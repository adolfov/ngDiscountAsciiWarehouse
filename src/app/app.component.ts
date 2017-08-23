import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class Product {
  id: string;
  size: number;
  price: number;
  face: string;
  date: Date;
}
