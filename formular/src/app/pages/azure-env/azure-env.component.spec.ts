import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureEnvComponent } from './azure-env.component';

describe('AzureEnvComponent', () => {
  let component: AzureEnvComponent;
  let fixture: ComponentFixture<AzureEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
