import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriqueJoueurComponent } from './edit-historique-joueur.component';

describe('EditHistoriqueJoueurComponent', () => {
  let component: EditHistoriqueJoueurComponent;
  let fixture: ComponentFixture<EditHistoriqueJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHistoriqueJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHistoriqueJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
