import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureSpSettingCardComponent } from './azure-sp-setting-card.component';

describe('SettingCardComponent', () => {
  let component: AzureSpSettingCardComponent;
  let fixture: ComponentFixture<AzureSpSettingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureSpSettingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureSpSettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
