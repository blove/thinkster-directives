import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentDirective } from './directives';
import { ActionsDirective } from './directives/actions.directive';
import { WookieeDirective } from './directives/wookiee.directive';
import { HanDirective } from './directives/han.directive';
import { GreedoDirective } from './directives/greedo.directive';

const DIRECTIVES = [
  ActionsDirective,
  ContentDirective,
  GreedoDirective,
  HanDirective,
  WookieeDirective
];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES]
})
export class SharedModule {}
