import { Directive } from '@angular/core';
import {BorderDirective} from "./border.directive";
import {HighlightDirective} from "./highlight.directive";

/**
 * Angular's API allows us to easily redefine the properties names using the <innerPropName>: <outerPropName> syntax
 */

@Directive({
  selector: '[appComposite]',
  hostDirectives: [
    {
      directive: BorderDirective,
      inputs: ['color: borderColor']
    },
    {
      directive: HighlightDirective,
      inputs: ['backgroundColor: bgColor']
    }
  ],
  standalone: true
})
export class CompositeDirective {

  constructor() { }

}
