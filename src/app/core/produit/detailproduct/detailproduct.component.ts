import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
   console.log(this.ac.snapshot.params['idt'])//send request to daba base
  }

}
