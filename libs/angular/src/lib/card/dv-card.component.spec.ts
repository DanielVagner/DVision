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
          <div dvCardHeader>Header</div>
          Body content
          <div dvCardFooter>Footer</div>
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

    it('renders media slot', () => {
      const media = fixture.debugElement.query(By.css('.dv-card__media'));
      expect(media).toBeTruthy();
    });

    it('renders header slot', () => {
      const header = fixture.debugElement.query(By.css('.dv-card__header'));
      expect(header).toBeTruthy();
    });

    it('renders content slot', () => {
      const content = fixture.debugElement.query(By.css('.dv-card__content'));
      expect(content).toBeTruthy();
    });

    it('renders footer slot', () => {
      const footer = fixture.debugElement.query(By.css('.dv-card__footer'));
      expect(footer).toBeTruthy();
    });
  });

  describe('optional slots', () => {
    @Component({
      standalone: true,
      imports: [DvCardComponent],
      template: `<dv-card>Just content</dv-card>`,
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
