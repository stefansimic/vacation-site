import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroatiaPula } from './croatia-pula';

describe('CroatiaPula', () => {
  let component: CroatiaPula;
  let fixture: ComponentFixture<CroatiaPula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CroatiaPula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroatiaPula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
