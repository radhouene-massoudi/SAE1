import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
product:any=[];
  constructor() { }

  ngOnInit(): void {
  }
showForm(t:any){
  console.log(t)
}

}
