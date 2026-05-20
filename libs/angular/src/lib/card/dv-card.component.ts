import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

export type DvCardVariant = 'elevated' | 'filled' | 'outlined';

@Component({
  selector: 'dv-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="dv-card dv-card--{{ variant() }}">
      <ng-content />
    </div>
  `,
  styleUrl: './dv-card.component.scss',
})
export class DvCardComponent {
  variant = input<DvCardVariant>('elevated');
}
