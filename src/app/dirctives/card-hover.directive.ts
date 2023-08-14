import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]',
})
// Custom card hover directive which uses host listener events such as mouseover and mouse leave
// to add or remove box shadow and border
export class CardHoverDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.eleRef.nativeElement.style.border = '1px solid rgba(213, 218, 237, 1);';
    this.eleRef.nativeElement.style.boxShadow = '7px 5px 5px rgb(213, 218, 237)';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.eleRef.nativeElement.style.border = '1px solid rgba(213, 218, 237, 0.5)';
    this.eleRef.nativeElement.style.boxShadow = '7px 5px 5px transparent';
  }
}
