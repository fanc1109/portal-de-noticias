import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuturiais } from './tuturiais';

describe('Tuturiais', () => {
  let component: Tuturiais;
  let fixture: ComponentFixture<Tuturiais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tuturiais],
    }).compileComponents();

    fixture = TestBed.createComponent(Tuturiais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
