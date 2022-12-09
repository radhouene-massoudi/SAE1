import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-errorsss',
  templateUrl: './errorsss.component.html',
  styleUrls: ['./errorsss.component.css']
})
export class ErrorsssComponent implements OnInit,OnChanges {
@Input()err:any;

  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(changes: SimpleChanges): void {
  console.log('test')
  console.log(changes)
}
}
