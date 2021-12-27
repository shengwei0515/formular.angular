import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsAccountSettingCardComponent } from './jenkins-account-setting-card.component';

describe('JenkinsAccountSettingCardComponent', () => {
  let component: JenkinsAccountSettingCardComponent;
  let fixture: ComponentFixture<JenkinsAccountSettingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JenkinsAccountSettingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsAccountSettingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
