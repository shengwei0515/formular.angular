import { Component, OnInit, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { HttpService } from 'src/app/core/services/http/http.service';
import { urlJoin } from 'url-join-ts';
import { ApiUrls, AzureEnvGetBySubscriptionResponse } from 'src/app/core/services/http/formularApiContent';
import { DetialCardComponent } from './detial-card/detial-card.component'

@Component({
  selector: 'app-vm-table',
  templateUrl: './vm-table.component.html',
  styleUrls: ['./vm-table.component.css'],
  providers: [ DialogService, MessageService ]
})
export class VmTableComponent implements OnInit {
  @Input() subscription = '';
  
  isGettingData: boolean = true;
  tableData: AzureEnvGetBySubscriptionResponse[] = [];
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
    this.ref = this.dialogService.open(DetialCardComponent, {
        header: 'Detial',
        width: '90%',
        data: {
          terraformWorkspace: terraformWorkspace
        }
    });

    this.ref.onClose.subscribe((closeString: string) => {
      console.log(closeString);
    })
  }

  getAzureEnvInfoBySubscription(subscriptionId: string): void {
    this.httpService.get({url: urlJoin(ApiUrls.AZURE_ENV_GET_BY_SUBSCRIPTION, subscriptionId)}).subscribe( res => {
      this.tableData = res.body;
      this.isGettingData = false;
    });
  }
}
