import { ChangeDetectionStrategy, Component, ContentChild, input } from '@angular/core';
import { DvCardHeaderDirective } from './dv-card-header.directive';
import { DvCardFooterDirective } from './dv-card-footer.directive';
import { DvCardMediaDirective } from './dv-card-media.directive';

export type DvCardVariant = 'elevated' | 'filled' | 'outlined';

@Component({
  selector: 'dv-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="dv-card dv-card--{{ variant() }}">
      @if (media) {
        <div class="dv-card__media">
          <ng-content select="[dvCardMedia], dv-card-media" />
        </div>
      }
      @if (header) {
        <div class="dv-card__header">
          <ng-content select="[dvCardHeader], dv-card-header" />
        </div>
      }
      <div class="dv-card__content">
        <ng-content />
      </div>
      @if (footer) {
        <div class="dv-card__footer">
          <ng-content select="[dvCardFooter], dv-card-footer" />
        </div>
      }
    </div>
  `,
  styleUrl: './dv-card.component.scss',
})
export class DvCardComponent {
  variant = input<DvCardVariant>('elevated');

  @ContentChild(DvCardHeaderDirective) header?: DvCardHeaderDirective;
  @ContentChild(DvCardFooterDirective) footer?: DvCardFooterDirective;
  @ContentChild(DvCardMediaDirective) media?: DvCardMediaDirective;
}
