import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCalendrierComponent } from './edit-calendrier.component';

describe('EditCalendrierComponent', () => {
  let component: EditCalendrierComponent;
  let fixture: ComponentFixture<EditCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCalendrierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
