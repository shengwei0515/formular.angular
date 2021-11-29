import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'
import { ServicePrincipleGetallViewModel } from '../azure-sp-setting-card.model';
import { ApiUrls, ServicePrincipleCreateParameter } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-delete-sp',
  templateUrl: './delete-sp.component.html',
  styleUrls: ['./delete-sp.component.css']
})
export class DeleteSpComponent implements OnInit {

  modelToDelete: ServicePrincipleGetallViewModel;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private readonly httpService: HttpService
    ) { 
      this.modelToDelete = this.config.data.modelToDelete;
    }

  ngOnInit(): void {
  }

  async onClieckYes(): Promise<any> {
    await this.deleteSp();
    this.ref.close();
  }

  async deleteSp(): Promise<any> {
    var parameterForDelete: ServicePrincipleCreateParameter = {
      SubscriptionId: this.modelToDelete.subscriptionId,
      ClientSecret: "",
      ClientId: this.modelToDelete.clientId,
      TenantId: this.modelToDelete.tenantId
    };
    await this.httpService.post({url: ApiUrls.SERVICE_PRINCIPLE_DELETE , body: parameterForDelete}).toPromise();
  }

  onClieckNo(): void {
    this.ref.close();
  }

}
