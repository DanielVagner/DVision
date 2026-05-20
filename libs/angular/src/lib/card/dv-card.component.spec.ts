import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DvCardComponent } from './dv-card.component';
import { DvCardHeaderDirective } from './dv-card-header.directive';
import { DvCardFooterDirective } from './dv-card-footer.directive';
import { DvCardMediaDirective } from './dv-card-media.directive';

describe('DvCardComponent', () => {
  describe('variant class', () => {
    it('applies elevated class by default', async () => {
      const fixture = TestBed.createComponent(DvCardComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('.dv-card');
      expect(el.classList).toContain('dv-card--elevated');
    });

    it('applies filled class when variant is filled', async () => {
      const fixture = TestBed.createComponent(DvCardComponent);
      fixture.componentRef.setInput('variant', 'filled');
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('.dv-card');
      expect(el.classList).toContain('dv-card--filled');
    });

    it('applies outlined class when variant is outlined', async () => {
      const fixture = TestBed.createComponent(DvCardComponent);
      fixture.componentRef.setInput('variant', 'outlined');
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('.dv-card');
      expect(el.classList).toContain('dv-card--outlined');
    });
  });

  describe('content slots', () => {
    @Component({
      standalone: true,
      imports: [
        DvCardComponent,
        DvCardHeaderDirective,
        DvCardFooterDirective,
        DvCardMediaDirective,
      ],
      template: `
        <dv-card>
          <img dvCardMedia src="test.jpg" alt="test" />
          <dv-card-header
            ><small>Cat</small>
            <h3>Title</h3></dv-card-header
          >
          <p>Body content</p>
          <dv-card-footer>Footer</dv-card-footer>
        </dv-card>
      `,
    })
    class HostComponent {}

    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
      fixture = TestBed.createComponent(HostComponent);
      fixture.detectChanges();
    });

    it('applies dv-card__media class to the media element', () => {
      const media = fixture.debugElement.query(By.css('.dv-card__media'));
      expect(media).toBeTruthy();
    });

    it('applies dv-card__header class to the header element', () => {
      const header = fixture.debugElement.query(By.css('.dv-card__header'));
      expect(header).toBeTruthy();
    });

    it('applies dv-card__footer class to the footer element', () => {
      const footer = fixture.debugElement.query(By.css('.dv-card__footer'));
      expect(footer).toBeTruthy();
    });

    it('renders body content', () => {
      const body = fixture.debugElement.query(By.css('p'));
      expect(body.nativeElement.textContent.trim()).toBe('Body content');
    });
  });

  describe('flexible slot ordering', () => {
    @Component({
      standalone: true,
      imports: [
        DvCardComponent,
        DvCardHeaderDirective,
        DvCardFooterDirective,
        DvCardMediaDirective,
      ],
      template: `
        <dv-card>
          <dv-card-header><h3>Header first</h3></dv-card-header>
          <img dvCardMedia src="test.jpg" alt="test" />
          <p>Body</p>
          <dv-card-footer>Footer</dv-card-footer>
        </dv-card>
      `,
    })
    class ReorderedHostComponent {}

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ReorderedHostComponent],
      }).compileComponents();
    });

    it('renders header before media when written that way', () => {
      const fixture = TestBed.createComponent(ReorderedHostComponent);
      fixture.detectChanges();
      const card = fixture.nativeElement.querySelector('.dv-card');
      const children = Array.from(card.children) as HTMLElement[];
      const headerIdx = children.findIndex(el => el.classList.contains('dv-card__header'));
      const mediaIdx = children.findIndex(el => el.classList.contains('dv-card__media'));
      expect(headerIdx).toBeLessThan(mediaIdx);
    });
  });

  describe('optional slots', () => {
    @Component({
      standalone: true,
      imports: [DvCardComponent],
      template: `<dv-card><p>Just content</p></dv-card>`,
    })
    class MinimalHostComponent {}

    beforeEach(async () => {
      await TestBed.configureTestingModule({ imports: [MinimalHostComponent] }).compileComponents();
    });

    it('does not render media slot when not provided', () => {
      const fixture = TestBed.createComponent(MinimalHostComponent);
      fixture.detectChanges();
      const media = fixture.debugElement.query(By.css('.dv-card__media'));
      expect(media).toBeNull();
    });

    it('does not render header slot when not provided', () => {
      const fixture = TestBed.createComponent(MinimalHostComponent);
      fixture.detectChanges();
      const header = fixture.debugElement.query(By.css('.dv-card__header'));
      expect(header).toBeNull();
    });

    it('does not render footer slot when not provided', () => {
      const fixture = TestBed.createComponent(MinimalHostComponent);
      fixture.detectChanges();
      const footer = fixture.debugElement.query(By.css('.dv-card__footer'));
      expect(footer).toBeNull();
    });
  });
});
