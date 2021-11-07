import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const AZURE_SUB_DATA = [
  {
    talentId: "aad",
    clientId: "small_seal",
    subscriptionId: "subid"
  }
]

@Component({
  selector: 'app-azure-sp-setting-card',
  templateUrl: './azure-sp-setting-card.component.html',
  styleUrls: ['./azure-sp-setting-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AzureSpSettingCardComponent implements OnInit {

  servicePrincipleSettings: any = [];

  constructor() { }

  ngOnInit(): void {
    this.servicePrincipleSettings = AZURE_SUB_DATA;
  }

  clickUpdate(): void {
    console.log("update")
  }

  clickRemove(): void {
    console.log("remove")
  }

}
