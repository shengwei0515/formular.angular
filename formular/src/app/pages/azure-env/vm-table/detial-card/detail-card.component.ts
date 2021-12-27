import { Component, OnInit } from '@angular/core';
import { ApiUrls, AzureEnvDetailParameter, AzureEnvDetailResponse } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpParams } from '@angular/common/http';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css'],
})
export class DetailCardComponent implements OnInit {

  getDetailPayload = {} as AzureEnvDetailParameter;
  detailInfoList = [] as AzureEnvDetailResponse[]
  isGettingData = true;

  constructor(
    private httpService: HttpService,
    private ref: DynamicDialogRef, 
    private config: DynamicDialogConfig
    ) { 
      this.getDetailPayload.resourceGroup = this.config.data?.resourceGroup
      this.getDetailPayload.subscription = this.config.data?.subscription
      console.log(this.getDetailPayload)
    }
  
  async getDetailData(): Promise<AzureEnvDetailResponse[]> {
    let params = new HttpParams({fromObject: this.getDetailPayload});
    let response = [] as AzureEnvDetailResponse[]
    await this.httpService.get({url: ApiUrls.AZURR_ENV_DETAIL, params:params}).toPromise().then(res=>{
      response = res.body;
    });
    return response
  }
  
  async ngOnInit(): Promise<void> {
    this.detailInfoList = await this.getDetailData();
    console.log(this.detailInfoList)
    this.isGettingData = false;
  }

  close(): void {
    console.log("close");
  }
}
