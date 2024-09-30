import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoriqueJoueurComponent } from './view-historique-joueur.component';

describe('ViewHistoriqueJoueurComponent', () => {
  let component: ViewHistoriqueJoueurComponent;
  let fixture: ComponentFixture<ViewHistoriqueJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHistoriqueJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHistoriqueJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
