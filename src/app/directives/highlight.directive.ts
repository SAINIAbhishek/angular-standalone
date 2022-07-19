import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#5f5aee';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.padding = '10px';
    this.elementRef.nativeElement.style.borderRadius = '4px';
    this.elementRef.nativeElement.style.fontWeight = '600';
  }

}
