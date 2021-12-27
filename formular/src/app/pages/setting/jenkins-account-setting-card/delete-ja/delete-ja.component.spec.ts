import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJaComponent } from './delete-ja.component';

describe('DeleteJaComponent', () => {
  let component: DeleteJaComponent;
  let fixture: ComponentFixture<DeleteJaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
