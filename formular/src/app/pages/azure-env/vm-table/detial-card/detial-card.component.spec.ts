import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialCardComponent } from './detial-card.component';

describe('DetialCardComponent', () => {
  let component: DetialCardComponent;
  let fixture: ComponentFixture<DetialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
