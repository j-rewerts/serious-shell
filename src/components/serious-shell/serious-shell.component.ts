import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serious-shell',
  templateUrl: './serious-shell.component.html',
  styleUrls: ['./serious-shell.component.css']
})
export class SeriousShellComponent implements OnInit {
  focus: boolean;

  constructor() {
    this.focus = false;
  }

  ngOnInit() {
  }

  onKeyDown = () => {
    const keyCodes = {
      // return
      13: this.acceptLine,
      // left
      // 37: this.backwardChar,
      // // right
      // 39: this.forwardChar,
      // // up
      // 38: this.previousHistory,
      // // down
      // 40: this.nextHistory,
      // // backspace
      // 8:  this.backwardDeleteChar,
      // // delete
      // 46: this.deleteChar,
      // // end
      // 35: this.endOfLine,
      // // start
      // 36: this.beginningOfLine,
      // // tab
      // 9: this.complete,
      // // esc
      // 27: this.prefixMeta,
    };
  }

  onBlur = () => {

  }

  onFocus = () => {

  }

    /**
     * Handles the user pressing enter/return (13);
     */
  acceptLine = () => {
    console.error('TODO: implement acceptLine');
  }

}
