import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-cursor',
  templateUrl: './console-cursor.component.html',
  styleUrls: ['./console-cursor.component.css']
})
export class ConsoleCursorComponent implements OnInit {
  isIdle: boolean;


  constructor() {
    this.isIdle = true;
  }

  setIdle() {
    this.isIdle = true;
  }

  unsetIdle() {
    this.isIdle = false;
  }

  ngOnInit() {
  }

}
