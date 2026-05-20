import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DV_CARD, DvCardVariant } from '@dvision/angular';

@Component({
  selector: 'docs-card-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DV_CARD],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss',
})
export class CardPage {
  activeVariant = signal<DvCardVariant>('elevated');
  readonly variants: DvCardVariant[] = ['elevated', 'filled', 'outlined'];
}
