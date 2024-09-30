import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJoueurComponent } from './view-joueur.component';

describe('ViewJoueurComponent', () => {
  let component: ViewJoueurComponent;
  let fixture: ComponentFixture<ViewJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
