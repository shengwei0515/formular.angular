import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpComponent } from './delete-sp.component';

describe('DeleteSpComponent', () => {
  let component: DeleteSpComponent;
  let fixture: ComponentFixture<DeleteSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
