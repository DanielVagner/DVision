import { Directive } from '@angular/core';

@Directive({
  selector: '[dvCardHeader], dv-card-header',
  standalone: true,
  host: { class: 'dv-card__header' },
})
export class DvCardHeaderDirective {}
