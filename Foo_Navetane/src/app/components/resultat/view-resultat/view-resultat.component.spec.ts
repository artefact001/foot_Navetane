import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResultatComponent } from './view-resultat.component';

describe('ViewResultatComponent', () => {
  let component: ViewResultatComponent;
  let fixture: ComponentFixture<ViewResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewResultatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
