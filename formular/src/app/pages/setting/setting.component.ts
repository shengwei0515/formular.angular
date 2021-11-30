import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ifAzureSpSettingShow: Boolean = false;

  ngOnInit(): void {
  }

  onTableOpen(event: any): void {
    if ( event.index == 0){
      this.ifAzureSpSettingShow = true;
    }
  }

  onTableClose(event: any): void {
    if ( event.index == 0){
      this.ifAzureSpSettingShow = false;
      console.log("hide");
    }
  }
}
