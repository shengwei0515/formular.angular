import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-detial-card',
  templateUrl: './detial-card.component.html',
  styleUrls: ['./detial-card.component.css'],
})
export class DetialCardComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  
  terraformWorkspace: string = "";
  
  ngOnInit(): void {
    console.log(this.config.data);
    this.terraformWorkspace = this.config.data.terraformWorkspace;
  }

  close(): void {
    console.log("close");
    this.ref.close("close_string");
  }
}
