import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerbiaSumadija } from './serbia-sumadija';

describe('SerbiaSumadija', () => {
  let component: SerbiaSumadija;
  let fixture: ComponentFixture<SerbiaSumadija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerbiaSumadija]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerbiaSumadija);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
