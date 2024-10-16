import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatistiqueComponent } from './edit-statistique.component';

describe('EditStatistiqueComponent', () => {
  let component: EditStatistiqueComponent;
  let fixture: ComponentFixture<EditStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStatistiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
