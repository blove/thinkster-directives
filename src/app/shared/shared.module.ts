import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  ActionsDirective,
  ContentDirective,
  GreedoDirective,
  HanDirective,
  WookieeDirective
} from './directives';
import { WookieePipe } from './pipes';

const DIRECTIVES = [
  ActionsDirective,
  ContentDirective,
  GreedoDirective,
  HanDirective,
  WookieeDirective,
  WookieePipe
];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES]
})
export class SharedModule {}
