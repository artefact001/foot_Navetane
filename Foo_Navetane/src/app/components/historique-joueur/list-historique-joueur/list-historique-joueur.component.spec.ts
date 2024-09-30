import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriqueJoueurComponent } from './list-historique-joueur.component';

describe('ListHistoriqueJoueurComponent', () => {
  let component: ListHistoriqueJoueurComponent;
  let fixture: ComponentFixture<ListHistoriqueJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHistoriqueJoueurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHistoriqueJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
