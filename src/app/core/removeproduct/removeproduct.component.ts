import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../productService/product.service';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {
id:any;
  constructor(private productService:ProductService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['idofproducttoremoveit']
    this.productService.removeProduct(this.id).subscribe(
      ()=>{
        this.router.navigate(['products'])
      }
    );
  }

}
