import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[swrBtnGrow]'
})
export class BtnGrowDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const el = this.elementRef.nativeElement;
    if (!el) {
      return;
    }

    this.renderer.addClass(el, 'btn-grow');
  }
}
