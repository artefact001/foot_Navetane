import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalendrierComponent } from './view-calendrier.component';

describe('ViewCalendrierComponent', () => {
  let component: ViewCalendrierComponent;
  let fixture: ComponentFixture<ViewCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCalendrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
