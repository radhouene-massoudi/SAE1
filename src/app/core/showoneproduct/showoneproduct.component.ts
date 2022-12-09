import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnInit,OnChanges {
@Input()p:any;
@Output() notif=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
sendDataToParent(product:any){
  this.notif.emit(product)
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
}
