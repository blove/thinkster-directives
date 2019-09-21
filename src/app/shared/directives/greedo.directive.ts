import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Directive({
  selector: '[swrGreedo]'
})
export class GreedoDirective implements OnChanges {
  // 1. Create a new input binding property called `fire` and set the binding name to `swrGreedo`.
  // hint: you can set the binding name by supplying the name as the first argument to the `@Input()` function.

  constructor(private readonly elementRef: ElementRef) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    let src: string;

    // set the image source value
    if (simpleChanges.fire.currentValue) {
      src = '/assets/img/dizzy-face-emoji.png';
    } else {
      src = '/assets/img/greedo.png';
    }

    // 2. Get the native element from the injected ElementRef instance.

    // 3. After 500 millisconds update the image src attribute.
    // Why? Well, as a fan of StrWrs will tell you, Han shot first :)
  }
}
