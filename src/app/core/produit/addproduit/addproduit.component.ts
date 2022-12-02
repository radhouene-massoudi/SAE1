import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../productService/product.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
product:any=[];
  constructor(private s:ProductService) { }

  ngOnInit(): void {
    //this.s.obs().subscribe()
    
    
  }
showForm(t:any){
  console.log(t)
}
addP(f:any){
  this.s.addProduct(f).subscribe(
    ()=>{
      console.log('added')
    }
  );
}
}
