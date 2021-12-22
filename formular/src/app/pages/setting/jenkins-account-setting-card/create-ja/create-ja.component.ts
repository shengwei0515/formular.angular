import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinsAccountParameter } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-ja',
  templateUrl: './create-ja.component.html',
  styleUrls: ['./create-ja.component.css']
})
export class CreateJaComponent implements OnInit {

  jenkinAccountToCreate: JenkinsAccountParameter;
  
  constructor(
    private readonly dynamicDialogRef: DynamicDialogRef,
    private readonly httpService: HttpService,
  ) { 
    this.jenkinAccountToCreate = {
      serverName: "",
      account: "",
      secret: "",
      serverBaseUrl: ""
    };
  }

  ngOnInit(): void {
  }

  async submit(): Promise<any> {
    await this.create();
    this.dynamicDialogRef.close();
  }
  
  async create(): Promise<any>{
    await this.httpService.post({url: ApiUrls.JENKINS_ACCOUNT , body: this.jenkinAccountToCreate}).toPromise();
  }
}
