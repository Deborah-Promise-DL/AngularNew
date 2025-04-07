import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactValidationsComponent } from './react-validations.component';

describe('ReactValidationsComponent', () => {
  let component: ReactValidationsComponent;
  let fixture: ComponentFixture<ReactValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
