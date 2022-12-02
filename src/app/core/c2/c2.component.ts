import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[ProductService]
})
export class C2Component implements OnInit {

  constructor(private s:ProductService) { }

  ngOnInit(): void {
   // this.s.addElementToTab('esprit')
  }
addtotab() {
  this.s.addElementToTab('esprit');
}
}
