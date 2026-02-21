import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyRome } from './italy-rome';

describe('ItalyRome', () => {
  let component: ItalyRome;
  let fixture: ComponentFixture<ItalyRome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalyRome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalyRome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
