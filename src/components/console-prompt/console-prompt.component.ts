import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-prompt',
  templateUrl: './console-prompt.component.html',
  styleUrls: ['./console-prompt.component.css']
})
export class ConsolePromptComponent implements OnInit {
  label: string;
  argument: string;
  renderedValue: string;

  constructor() {
    this.label = 'label>';
    this.argument = 'arg';
    this.renderedValue = 'this is my value';
  }

  ngOnInit() {
  }

}
