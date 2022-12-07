import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
p=new Product;
  constructor(private productService:ProductService,
    private ac:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.productService.getProductById(this.ac.snapshot.params['idofproducttoupdateit']).subscribe(
      (d)=>{
this.p=d;
console.log(this.p);
      }
    )
  }
update(f:any){
  
this.productService.updateProduct(f,this.ac.snapshot.params['idofproducttoupdateit']).subscribe(
  ()=>{
    //console.log('updated')
    this.router.navigate(['products'])
  },
  (error)=>{
    console.log(error)
  }
)
}
}
