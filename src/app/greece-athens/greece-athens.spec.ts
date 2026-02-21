import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeceAthens } from './greece-athens';

describe('GreeceAthens', () => {
  let component: GreeceAthens;
  let fixture: ComponentFixture<GreeceAthens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreeceAthens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeceAthens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
