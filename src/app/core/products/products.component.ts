import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
list:any;
show=false;
prod!:Product;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.productService.fetchProducts().subscribe(
    (result)=>{
      this.list=result
      console.log(result)
    }
    
  );

  }
  update(p:any){
    this.show=true
this.prod=p
  }
}
