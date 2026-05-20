import { Directive } from '@angular/core';

@Directive({
  selector: '[dvCardFooter], dv-card-footer',
  standalone: true,
  host: { class: 'dv-card__footer' },
})
export class DvCardFooterDirective {}
