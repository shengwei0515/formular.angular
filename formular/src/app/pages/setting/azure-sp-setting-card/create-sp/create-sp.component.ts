import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DynamicDialogRef} from 'primeng/dynamicdialog';
import { ApiUrls, ServicePrincipleCreateParameter } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-create-sp',
  templateUrl: './create-sp.component.html',
  styleUrls: ['./create-sp.component.css']
})
export class CreateSpComponent implements OnInit {
  @Output() close = new EventEmitter<any>();
  
  clientId: string;
  clientSecret: string;
  subscriptionId: string;
  tenantId: string;
  
  constructor(
    private readonly dynamicDialogRef: DynamicDialogRef,
    private readonly httpService: HttpService,
  ) { 
    this.clientId = "";
    this.clientSecret = "";
    this.subscriptionId = "";
    this.tenantId = "";
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.create();
    this.dynamicDialogRef.close();
  }
  
  create(): void {
    var spToCreate: ServicePrincipleCreateParameter = {
      SubscriptionId: this.subscriptionId,
      ClientSecret: this.clientSecret,
      ClientId: this.clientId,
      TenantId: this.tenantId,
    };
    this.httpService.post({url: ApiUrls.SERVICE_PRINCIPLE_CREATE , body: spToCreate})
                    .subscribe( res => {
                    });
  }
}
