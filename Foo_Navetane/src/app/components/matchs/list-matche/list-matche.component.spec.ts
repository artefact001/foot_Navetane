import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMatcheComponent } from './list-matche.component';


describe('ListMatcheComponent', () => {
  let component: ListMatcheComponent;
  let fixture: ComponentFixture<ListMatcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMatcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
