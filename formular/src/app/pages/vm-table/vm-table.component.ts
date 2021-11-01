import { Component, OnInit } from '@angular/core';

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
  styleUrls: ['./vm-table.component.css']
})
export class VmTableComponent implements OnInit {

  tableData: EnvInfoWithVM[] = [];
  displayDetailDialog: boolean = false;

  ngOnInit(): void {
    this.tableData = VM_DATA;
  }

  showDetailDialog(terraformWorkspace: string): void {
    this.displayDetailDialog = true;
    console.log(terraformWorkspace);
  }

  closeDetailDialog(): void {
    this.displayDetailDialog = false
  }

}
