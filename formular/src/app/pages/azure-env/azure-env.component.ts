import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ApiUrls, AzureEnvGetAvailiableSubscriptionResponse  } from 'src/app/core/services/http/formularApiContent';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-azure-env',
  templateUrl: './azure-env.component.html',
  styleUrls: ['./azure-env.component.css']
})
export class AzureEnvComponent implements OnInit {

  subscriptionList: AzureEnvGetAvailiableSubscriptionResponse[] = [];
  isGettingData: boolean = true;

  constructor(
    private readonly httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getInitData();
  }

  async getInitData(): Promise<any>{
    this.isGettingData = true;
    await this.getAvailiableSubscription();
    this.isGettingData = false;
  }

  async getAvailiableSubscription(): Promise<any> {
    return this.httpService.get({url: ApiUrls.AZURE_ENV_GET_AVALIALE_SUBSCRIPTIONS}).toPromise().then(res => {
      this.subscriptionList = res.body;
    });
  }
}
