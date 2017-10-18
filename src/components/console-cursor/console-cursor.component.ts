import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-cursor',
  templateUrl: './console-cursor.component.html',
  styleUrls: ['./console-cursor.component.css']
})
export class ConsoleCursorComponent implements OnInit {
  isIdle: boolean;
  classes: Object;

  constructor() {
  }

  setIdle() {
    console.log('setting idle');
    this.isIdle = true;
  }

  unsetIdle() {
    this.isIdle = false;
  }

  printState() {
    console.log('isIdle? ' + this.isIdle);
  }

  ngOnInit() {
    this.unsetIdle();
    window.setTimeout(this.setIdle.bind(this), 3000);
    window.setInterval(this.printState.bind(this), 1000);
  }

}
