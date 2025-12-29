import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputfeilds } from './inputfeilds';

describe('Inputfeilds', () => {
  let component: Inputfeilds;
  let fixture: ComponentFixture<Inputfeilds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputfeilds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inputfeilds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
