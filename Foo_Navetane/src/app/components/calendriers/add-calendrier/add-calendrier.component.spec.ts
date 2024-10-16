import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalendrierComponent } from './add-calendrier.component';

describe('AddCalendrierComponent', () => {
  let component: AddCalendrierComponent;
  let fixture: ComponentFixture<AddCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCalendrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
