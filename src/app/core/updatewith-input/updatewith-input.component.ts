import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-updatewith-input',
  templateUrl: './updatewith-input.component.html',
  styleUrls: ['./updatewith-input.component.css']
})
export class UpdatewithInputComponent implements OnInit {
@Input()prod!:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
