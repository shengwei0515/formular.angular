import { HttpContext } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiUrls } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ServicePrincipleGetallViewModel } from './azure-sp-setting-card.model';

@Component({
  selector: 'app-azure-sp-setting-card',
  templateUrl: './azure-sp-setting-card.component.html',
  styleUrls: ['./azure-sp-setting-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AzureSpSettingCardComponent implements OnInit {

  servicePrincipleSettings: ServicePrincipleGetallViewModel[] = [];

  constructor(
    private readonly httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getAllSp();
  }

  clickUpdate(): void {
    console.log("update")
  }

  clickRemove(): void {
    console.log("remove")
  }

  getAllSp(): void {
    this.httpService.get({url: ApiUrls.SERVICE_PRINCIPLE_GET_ALL}).subscribe(res => {
      this.servicePrincipleSettings = res;
      console.log(res)
    });
  }

}
