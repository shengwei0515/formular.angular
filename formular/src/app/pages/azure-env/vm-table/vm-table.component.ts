import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { HttpService } from 'src/app/core/services/http/http.service';
import { urlJoin } from 'url-join-ts';
import { ApiUrls, AzureEnvGetBySubscriptionResponse } from 'src/app/core/services/http/formularApiContent';
import { DetialCardComponent } from './detial-card/detial-card.component'
import { DeleteEnvComponent } from './delete-env/delete-env.component';

export type AzureEnvGetBySubscriptionViewModel = AzureEnvGetBySubscriptionResponse & {
  createdDatetimeString: string;
  updatedDatetimeString: string;
}

@Component({
  selector: 'app-vm-table',
  templateUrl: './vm-table.component.html',
  styleUrls: ['./vm-table.component.css'],
  providers: [ DialogService, MessageService ]
})
export class VmTableComponent implements OnInit {
  @Input() subscription = '';
  
  isGettingData: boolean = true;
  tableData: AzureEnvGetBySubscriptionViewModel[] = [];
  displayDetailDialog: boolean = false;

  constructor(
    private dialogService: DialogService, 
    private messageService: MessageService,
    private httpService: HttpService) {}

  ref?: DynamicDialogRef;

  
  ngOnInit(): void {
    this.getAzureEnvInfoBySubscription(this.subscription);
  }

  showDetailDialog(terraformWorkspace: string): void {
    // this.displayDetailDialog = true;
    let ref = this.dialogService.open(DetialCardComponent, {
        header: 'Detial',
        width: '90%',
        data: {
          terraformWorkspace: terraformWorkspace
        }
    });
    // ref.onClose.subscribe((closeString: string) => {
    //   console.log(closeString);
    // })
  }

  showDestroyDialog(envdata: AzureEnvGetBySubscriptionViewModel): void{
    let ref = this.dialogService.open(DeleteEnvComponent, {
      header: "Destroy Env",
      width: '50%',
      data: {
        azureEnvViewModel: envdata
      }
    })
  }

  getAzureEnvInfoBySubscription(subscriptionId: string): void {
    this.httpService.get({url: urlJoin(ApiUrls.AZURE_ENV_GET_BY_SUBSCRIPTION, subscriptionId)}).subscribe( res => {
      this.tableData = res.body;
      this.tableData.forEach( x => x.createdDatetimeString = new Date(x.createdDatetime + 'Z').toLocaleString());
      this.tableData.forEach( x => x.updatedDatetimeString = new Date(x.updatedDatetime + 'Z').toLocaleString());
      this.isGettingData = false;
    });
  }
}
