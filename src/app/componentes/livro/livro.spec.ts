import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroComponente } from './livro';

describe('Livro', () => {
  let component: LivroComponente;
  let fixture: ComponentFixture<LivroComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
