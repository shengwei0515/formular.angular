import { ListRange } from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation} from '@angular/core';

const AZURE_SUB_DATA = [
  {
    talentId: "aad",
    clientId: "small_seal",
    subscriptionId: "subid"
  }
]

@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingCardComponent implements OnInit {

  servicePrincipleSettings: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onTableOpen(event: any): void {
    console.log(event.index)
    if ( event.index == 0){
      this.servicePrincipleSettings = AZURE_SUB_DATA
    }
    console.log(this.servicePrincipleSettings)
  }

}
