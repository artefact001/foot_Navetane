import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLicenceComponent } from './list-licence.component';

describe('ListLicenceComponent', () => {
  let component: ListLicenceComponent;
  let fixture: ComponentFixture<ListLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLicenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
