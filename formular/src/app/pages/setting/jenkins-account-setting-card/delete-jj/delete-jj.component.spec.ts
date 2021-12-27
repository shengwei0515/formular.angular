import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJjComponent } from './delete-jj.component';

describe('DeleteJjComponent', () => {
  let component: DeleteJjComponent;
  let fixture: ComponentFixture<DeleteJjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
