import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() backgroundColor = '#5f5aee'

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.padding = '10px';
    this.elementRef.nativeElement.style.borderRadius = '4px';
    this.elementRef.nativeElement.style.fontWeight = '600';
  }

}
