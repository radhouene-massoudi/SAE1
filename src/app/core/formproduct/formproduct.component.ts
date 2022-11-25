import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formproduct',
  templateUrl: './formproduct.component.html',
  styleUrls: ['./formproduct.component.css']
})
export class FormproductComponent implements OnInit {
product:any=[];
show=true;
  constructor() { }

  ngOnInit(): void {
  }
  addElementToTab(element:any){
    this.product.push(element)
    }
    changeStatus(){
this.show=!this.show
    }
}
