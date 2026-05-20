import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'docs-theme-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="theme-toggle" (click)="theme.toggle()" [attr.aria-label]="theme.theme() === 'dark' ? 'Prepnout na light' : 'Prepnout na dark'">
      @if (theme.theme() === 'dark') {
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      } @else {
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      }
    </button>
  `,
  styles: [`
    .theme-toggle {
      width: 36px;
      height: 36px;
      border-radius: var(--dvision-radius-sm);
      border: 1px solid var(--dvision-border);
      background: var(--dvision-surface);
      color: var(--dvision-text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 150ms, color 150ms, border-color 150ms;

      &:hover {
        background: var(--dvision-surface-alt);
        color: var(--dvision-text);
        border-color: var(--dvision-primary);
      }
    }
  `],
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}
