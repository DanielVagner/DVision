export { DvCardComponent } from './dv-card.component';
export { DvCardHeaderDirective } from './dv-card-header.directive';
export { DvCardFooterDirective } from './dv-card-footer.directive';
export { DvCardMediaDirective } from './dv-card-media.directive';
export type { DvCardVariant } from './dv-card.component';

import { DvCardComponent } from './dv-card.component';
import { DvCardHeaderDirective } from './dv-card-header.directive';
import { DvCardFooterDirective } from './dv-card-footer.directive';
import { DvCardMediaDirective } from './dv-card-media.directive';

export const DV_CARD = [
  DvCardComponent,
  DvCardHeaderDirective,
  DvCardFooterDirective,
  DvCardMediaDirective,
] as const;
