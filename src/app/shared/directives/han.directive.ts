import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[swrHan]'
})
export class HanDirective implements OnChanges {
  // 1. Create a new input binding property called `fire` and set the binding name to `swrHan`.
  // hint: you can set the binding name by supplying the name as the first argument to the `@Input()` function.

  constructor(private readonly elementRef: ElementRef) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    let src: string;

    // set the image source value
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/han-solo-fire.png';
    } else {
      src = '/assets/img/han-solo.png';
    }

    // 2. Get the native element from the injected ElementRef instance.

    // 3. Set the updated image src attribute.
  }
}
