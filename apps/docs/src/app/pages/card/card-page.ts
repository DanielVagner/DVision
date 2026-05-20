import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  DvCardComponent,
  DvCardFooterDirective,
  DvCardHeaderDirective,
  DvCardMediaDirective,
  DvCardVariant,
} from '@dvision/angular';

@Component({
  selector: 'docs-card-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DvCardComponent, DvCardHeaderDirective, DvCardFooterDirective, DvCardMediaDirective],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss',
})
export class CardPage {
  activeVariant = signal<DvCardVariant>('elevated');
  readonly variants: DvCardVariant[] = ['elevated', 'filled', 'outlined'];
}
