import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerbiaMonasteries } from './serbia-monasteries';

describe('SerbiaMonasteries', () => {
  let component: SerbiaMonasteries;
  let fixture: ComponentFixture<SerbiaMonasteries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerbiaMonasteries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerbiaMonasteries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
