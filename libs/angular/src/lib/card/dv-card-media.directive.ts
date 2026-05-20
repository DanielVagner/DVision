import { Directive } from '@angular/core';

@Directive({
  selector: '[dvCardMedia], dv-card-media',
  standalone: true,
  host: { class: 'dv-card__media' },
})
export class DvCardMediaDirective {}
