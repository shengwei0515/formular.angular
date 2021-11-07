import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTableOpen(event: any): void {
    console.log(event.index)
    if ( event.index == 0){
    }
  }
}
