import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FocusService } from '../services/focus.service';

@Directive({
  selector: '[appNewFocus]',
  providers: [FocusService]
})
export class NewFocusDirective implements OnDestroy, OnInit {
  @Input() appNewFocus = 'focus';
  @Input() appFocusId;
  listener: () => void;

  constructor(private renderer: Renderer2, private el: ElementRef, private focusService: FocusService) {
    console.log('Used my directive');
  }

  ngOnInit() {
    this.listener = this.renderer.listen(this.el.nativeElement, this.appNewFocus, () => {
      console.log('I found a new focus user!!');
      this.focusService.focus(this.appFocusId);
    });
  }

  ngOnDestroy() {
    if (this.listener) {
      this.listener();
    }
  }

}
