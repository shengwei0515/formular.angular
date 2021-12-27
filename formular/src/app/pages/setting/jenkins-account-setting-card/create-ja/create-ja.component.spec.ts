import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJaComponent } from './create-ja.component';

describe('CreateJaComponent', () => {
  let component: CreateJaComponent;
  let fixture: ComponentFixture<CreateJaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
