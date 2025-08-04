import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodapeComponente } from './rodape';

describe('RodapeComponente', () => {
  let component: RodapeComponente;
  let fixture: ComponentFixture<RodapeComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RodapeComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RodapeComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

