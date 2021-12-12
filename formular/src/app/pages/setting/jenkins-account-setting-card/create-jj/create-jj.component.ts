import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinJobParameter, JenkinsAccountResponse } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-jj',
  templateUrl: './create-jj.component.html',
  styleUrls: ['./create-jj.component.css']
})
export class CreateJjComponent implements OnInit {

  jenkinsJobParameter: JenkinJobParameter;
  jenkinsAccount: JenkinsAccountResponse;
  
  constructor(
    private readonly dynamicDialogRef: DynamicDialogRef,
    private readonly dynamicDialogConfig: DynamicDialogConfig,
    private readonly httpService: HttpService,
  ) { 
    this.jenkinsAccount = this.dynamicDialogConfig.data.jenkinsAccount;

    this.jenkinsJobParameter = {
      jenkinsJobName: "",
      jenkinsJobFullUrl: "",
      jenkinsAccountId: this.jenkinsAccount.id
    };
  }

  ngOnInit(): void {
  }

  async submit(): Promise<any> {
    await this.create();
    this.dynamicDialogRef.close();
  }
  
  async create(): Promise<any>{
    await this.httpService.post({url: ApiUrls.JENKINS_JOB , body: this.jenkinsJobParameter}).toPromise();
  }

}
