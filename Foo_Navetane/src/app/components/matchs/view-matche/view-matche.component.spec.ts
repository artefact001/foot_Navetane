import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMatcheComponent } from './view-matche.component';

describe('ViewMatcheComponent', () => {
  let component: ViewMatcheComponent;
  let fixture: ComponentFixture<ViewMatcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMatcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
