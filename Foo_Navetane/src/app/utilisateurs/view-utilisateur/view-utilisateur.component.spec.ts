import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUtilisateurComponent } from './view-utilisateur.component';

describe('ViewUtilisateurComponent', () => {
  let component: ViewUtilisateurComponent;
  let fixture: ComponentFixture<ViewUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUtilisateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
