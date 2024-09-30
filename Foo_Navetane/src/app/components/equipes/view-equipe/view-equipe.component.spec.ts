import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquipeComponent } from './view-equipe.component';

describe('ViewEquipeComponent', () => {
  let component: ViewEquipeComponent;
  let fixture: ComponentFixture<ViewEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
