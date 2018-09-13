import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onkeydown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmedValue = input.value;
    if (trimmedValue.length > 10) {
      trimmedValue = trimmedValue.substr(0, 10);
    }
    let maskedValue = '';
    if (trimmedValue.length === 10) {
      maskedValue = trimmedValue.split(' ').join('');
      maskedValue = maskedValue.replace(/\d{4}$/, '****');
    }

    input.value = maskedValue ? maskedValue : input.value;
  }

}
