import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Default button";
  @Input() color: string = "red";
  @Output() btnClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }
}
