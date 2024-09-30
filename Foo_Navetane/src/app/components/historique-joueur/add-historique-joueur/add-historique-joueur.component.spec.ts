import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriqueJoueurComponent } from './add-historique-joueur.component';

describe('AddHistoriqueJoueurComponent', () => {
  let component: AddHistoriqueJoueurComponent;
  let fixture: ComponentFixture<AddHistoriqueJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHistoriqueJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHistoriqueJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
