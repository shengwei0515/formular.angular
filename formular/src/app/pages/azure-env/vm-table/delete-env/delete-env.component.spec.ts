import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnvComponent } from './delete-env.component';

describe('DeleteEnvComponent', () => {
  let component: DeleteEnvComponent;
  let fixture: ComponentFixture<DeleteEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
