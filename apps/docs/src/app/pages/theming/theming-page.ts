import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ColorToken {
  label: string;
  base: string;
  hover: string;
  subtle: string;
  text: string;
}

interface SingleToken {
  label: string;
  token: string;
  value: string;
}

@Component({
  selector: 'docs-theming-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theming-page.html',
  styleUrl: './theming-page.scss',
})
export class ThemingPage {
  readonly colorGroups: ColorToken[] = [
    { label: 'Primary',   base: '--dvision-primary',   hover: '--dvision-primary-hover',   subtle: '--dvision-primary-subtle',   text: '--dvision-primary-text' },
    { label: 'Secondary', base: '--dvision-secondary', hover: '--dvision-secondary-hover', subtle: '--dvision-secondary-subtle', text: '--dvision-secondary-text' },
    { label: 'Accent',    base: '--dvision-accent',    hover: '--dvision-accent-hover',    subtle: '--dvision-accent-subtle',    text: '--dvision-accent-text' },
    { label: 'Success',   base: '--dvision-success',   hover: '--dvision-success-hover',   subtle: '--dvision-success-subtle',   text: '--dvision-success-text' },
    { label: 'Warning',   base: '--dvision-warning',   hover: '--dvision-warning-hover',   subtle: '--dvision-warning-subtle',   text: '--dvision-warning-text' },
    { label: 'Danger',    base: '--dvision-danger',    hover: '--dvision-danger-hover',    subtle: '--dvision-danger-subtle',    text: '--dvision-danger-text' },
    { label: 'Info',      base: '--dvision-info',      hover: '--dvision-info-hover',      subtle: '--dvision-info-subtle',      text: '--dvision-info-text' },
  ];

  readonly surfaceTokens: SingleToken[] = [
    { label: 'Background',    token: '--dvision-bg',           value: 'bg' },
    { label: 'Surface',       token: '--dvision-surface',      value: 'surface' },
    { label: 'Surface Alt',   token: '--dvision-surface-alt',  value: 'surface-alt' },
    { label: 'Border',        token: '--dvision-border',       value: 'border' },
    { label: 'Text',          token: '--dvision-text',         value: 'text' },
    { label: 'Text Muted',    token: '--dvision-text-muted',   value: 'text-muted' },
    { label: 'Text Disabled', token: '--dvision-text-disabled',value: 'text-disabled' },
  ];

  readonly radiusTokens = [
    { label: 'sm',   token: '--dvision-radius-sm',   px: '6px' },
    { label: 'md',   token: '--dvision-radius-md',   px: '12px' },
    { label: 'lg',   token: '--dvision-radius-lg',   px: '20px' },
    { label: 'full', token: '--dvision-radius-full',  px: '9999px' },
  ];

  readonly shadowTokens = [
    { label: 'sm', token: '--dvision-shadow-sm' },
    { label: 'md', token: '--dvision-shadow-md' },
    { label: 'lg', token: '--dvision-shadow-lg' },
  ];

  readonly spacingTokens = [
    { label: 'xs',  token: '--dvision-space-xs',  px: '4px' },
    { label: 'sm',  token: '--dvision-space-sm',  px: '8px' },
    { label: 'md',  token: '--dvision-space-md',  px: '16px' },
    { label: 'lg',  token: '--dvision-space-lg',  px: '24px' },
    { label: 'xl',  token: '--dvision-space-xl',  px: '40px' },
    { label: '2xl', token: '--dvision-space-2xl', px: '64px' },
  ];
}
