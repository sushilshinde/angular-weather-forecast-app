import { CardHoverDirective } from './card-hover.directive';
import { ElementRef } from '@angular/core';

fdescribe('CardHoverDirective', () => {
  it('should create an instance', () => {
    const directive = new CardHoverDirective(new ElementRef(null)); // Provide an ElementRef instance
    expect(directive).toBeTruthy();
  });
});
