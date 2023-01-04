import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-notify-me',
  templateUrl: './notify-me.component.html',
  styleUrls: ['./notify-me.component.css']
})
export class NotifyMeComponent implements OnInit {
  @Input() product! : Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
 
}





