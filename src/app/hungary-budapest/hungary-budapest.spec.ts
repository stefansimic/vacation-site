import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungaryBudapest } from './hungary-budapest';

describe('HungaryBudapest', () => {
  let component: HungaryBudapest;
  let fixture: ComponentFixture<HungaryBudapest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HungaryBudapest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HungaryBudapest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
