import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private readonly appConfig: AppConfigService) { }

  ngOnInit(): void {
    console.log(this.appConfig.baseUrl);
  }

  onTableOpen(event: any): void {
    console.log(event.index)
    if ( event.index == 0){
    }
  }
}
