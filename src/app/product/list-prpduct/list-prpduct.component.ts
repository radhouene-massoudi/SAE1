import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prpduct',
  templateUrl: './list-prpduct.component.html',
  styleUrls: ['./list-prpduct.component.css']
})
export class ListPrpductComponent implements OnInit,AfterViewInit {
  listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
    
  class="4SAE1 is the best";
color='pink';
Quantity=0;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
  }

  showMsg(){
    console.log('bonjour')
  }
  changeColor(){
    this.color='blue';
  }

  changeColor1(){
    if(this.Quantity>10){
      return 'blue';
    }return 'yellow';
   
  }
}
