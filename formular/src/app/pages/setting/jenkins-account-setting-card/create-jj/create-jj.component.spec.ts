import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJjComponent } from './create-jj.component';

describe('CreateJjComponent', () => {
  let component: CreateJjComponent;
  let fixture: ComponentFixture<CreateJjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
