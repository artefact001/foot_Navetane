import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatistiqueComponent } from './list-statistique.component';

describe('ListStatistiqueComponent', () => {
  let component: ListStatistiqueComponent;
  let fixture: ComponentFixture<ListStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStatistiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
