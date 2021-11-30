import { Component, OnInit, Input } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { DetialCardComponent } from './detial-card/detial-card.component'

export interface EnvInfoWithVM {
  create_at: Date,
  terraform_workspace: string
}

const VM_DATA: EnvInfoWithVM[] = [
  { create_at: new Date("2019-01-16"), terraform_workspace: "test1"},
  { create_at: new Date("2019-01-26"), terraform_workspace: "test2"},
]

@Component({
  selector: 'app-vm-table',
  templateUrl: './vm-table.component.html',
  styleUrls: ['./vm-table.component.css'],
  providers: [ DialogService, MessageService ]
})
export class VmTableComponent implements OnInit {
  @Input() subscription = '';
  
  tableData: EnvInfoWithVM[] = [];
  displayDetailDialog: boolean = false;

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref?: DynamicDialogRef;

  
  ngOnInit(): void {
    console.log("vm-table create");
    this.tableData = VM_DATA;
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

}
