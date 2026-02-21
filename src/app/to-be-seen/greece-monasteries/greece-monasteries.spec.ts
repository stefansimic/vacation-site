import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeceMonasteries } from './greece-monasteries';

describe('GreeceMonasteries', () => {
  let component: GreeceMonasteries;
  let fixture: ComponentFixture<GreeceMonasteries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreeceMonasteries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeceMonasteries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
