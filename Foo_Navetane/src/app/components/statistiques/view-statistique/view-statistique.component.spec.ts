import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatistiqueComponent } from './view-statistique.component';

describe('ViewStatistiqueComponent', () => {
  let component: ViewStatistiqueComponent;
  let fixture: ComponentFixture<ViewStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStatistiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
