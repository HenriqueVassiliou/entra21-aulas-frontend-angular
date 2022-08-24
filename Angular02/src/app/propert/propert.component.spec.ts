import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertComponent } from './propert.component';

describe('PropertComponent', () => {
  let component: PropertComponent;
  let fixture: ComponentFixture<PropertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
