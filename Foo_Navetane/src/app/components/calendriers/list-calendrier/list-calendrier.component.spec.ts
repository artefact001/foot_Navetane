import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCalendrierComponent } from './list-calendrier.component';

describe('ListCalendrierComponent', () => {
  let component: ListCalendrierComponent;
  let fixture: ComponentFixture<ListCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCalendrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
