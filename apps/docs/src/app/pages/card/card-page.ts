import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  ViewChild,
} from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
  readonly slotsSwapped = signal(false);

  readonly variantCode = computed(
    () => `&lt;dv-card variant="${this.activeVariant()}"&gt;
  &lt;dv-card-header&gt;
    &lt;small&gt;Kategorie&lt;/small&gt;
    &lt;h3&gt;Nazev karty&lt;/h3&gt;
  &lt;/dv-card-header&gt;

  &lt;p&gt;Obsah karty...&lt;/p&gt;

  &lt;dv-card-footer&gt;
    &lt;button&gt;Potvrdit&lt;/button&gt;
  &lt;/dv-card-footer&gt;
&lt;/dv-card&gt;`,
  );

  readonly slotCodeA =
    `&lt;dv-card&gt;\n` +
    `  &lt;<b>dv-card-header</b>&gt;\n` +
    `    &lt;small&gt;Kategorie&lt;/small&gt;\n` +
    `    &lt;h3&gt;Nazev&lt;/h3&gt;\n` +
    `  &lt;/<b>dv-card-header</b>&gt;\n` +
    `  &lt;<b>dv-card-media</b>&gt;&lt;img /&gt;&lt;/<b>dv-card-media</b>&gt;\n` +
    `  &lt;p&gt;Obsah&lt;/p&gt;\n` +
    `  &lt;<b>dv-card-footer</b>&gt;...&lt;/<b>dv-card-footer</b>&gt;\n` +
    `&lt;/dv-card&gt;`;

  readonly slotCodeB =
    `&lt;dv-card&gt;\n` +
    `  &lt;<b>dv-card-media</b>&gt;&lt;img /&gt;&lt;/<b>dv-card-media</b>&gt;\n` +
    `  &lt;<b>dv-card-header</b>&gt;\n` +
    `    &lt;small&gt;Kategorie&lt;/small&gt;\n` +
    `    &lt;h3&gt;Nazev&lt;/h3&gt;\n` +
    `  &lt;/<b>dv-card-header</b>&gt;\n` +
    `  &lt;p&gt;Obsah&lt;/p&gt;\n` +
    `  &lt;<b>dv-card-footer</b>&gt;...&lt;/<b>dv-card-footer</b>&gt;\n` +
    `&lt;/dv-card&gt;`;

  @ViewChild('liveCardRef') private liveCardRef?: ElementRef<HTMLElement>;

  constructor() {
    interval(2600)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.flipLiveCard();
      });
  }

  private flipLiveCard() {
    const container = this.liveCardRef?.nativeElement;
    if (!container) return;

    const dvCard = container.querySelector('.dv-card');
    if (!dvCard) return;

    const header = dvCard.querySelector('.dv-card__header') as HTMLElement | null;
    const media = dvCard.querySelector('.dv-card__media') as HTMLElement | null;
    if (!header || !media) return;

    // FIRST: record current positions before DOM change
    const headerFirst = header.getBoundingClientRect();
    const mediaFirst = media.getBoundingClientRect();

    // Swap DOM order — header and media change places
    const headerIsFirst = !!(
      header.compareDocumentPosition(media) & Node.DOCUMENT_POSITION_FOLLOWING
    );
    if (headerIsFirst) {
      dvCard.insertBefore(media, header);
    } else {
      dvCard.insertBefore(header, media);
    }

    // Sync diagram signal
    this.slotsSwapped.update(v => !v);

    // LAST: capture new positions after DOM change
    const headerLast = header.getBoundingClientRect();
    const mediaLast = media.getBoundingClientRect();

    // INVERT: apply reverse transform so elements appear at their FIRST position
    const headerDy = headerFirst.top - headerLast.top;
    const mediaDy = mediaFirst.top - mediaLast.top;

    header.style.transition = 'none';
    media.style.transition = 'none';
    header.style.transform = `translateY(${headerDy}px) translateX(-8px)`;
    media.style.transform = `translateY(${mediaDy}px) translateX(8px)`;

    // Force reflow so the browser paints the inverted state
    void header.offsetHeight;

    // PLAY: release transforms — CSS transition animates to the final position
    requestAnimationFrame(() => {
      const ease = '680ms cubic-bezier(0.65, 0, 0.35, 1)';
      header.style.transition = `transform ${ease}`;
      media.style.transition = `transform ${ease}`;
      header.style.transform = '';
      media.style.transform = '';
    });

    // Cleanup inline styles after animation completes
    setTimeout(() => {
      header.style.transition = '';
      header.style.transform = '';
      media.style.transition = '';
      media.style.transform = '';
    }, 750);
  }
}
