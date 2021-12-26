import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinsAccountResponse, JenkinsJobBranchGetParameter, JenkinsJobTriggerDestroyEnvParameter } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpParams } from '@angular/common/http';
import { AzureEnvGetBySubscriptionViewModel } from '../vm-table.component'
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-delete-env',
  templateUrl: './delete-env.component.html',
  styleUrls: ['./delete-env.component.css']
})
export class DeleteEnvComponent implements OnInit {

  data = {} as AzureEnvGetBySubscriptionViewModel
  deletePayload = {} as JenkinsJobTriggerDestroyEnvParameter;
  jenkinsServerNameList: string[] = [];
  jenkinsJobNameList: string[] = [];
  jenkinsJobBranchList: string[] = [];
  ifDisableServerNane: boolean = true;
  ifDisableJobName: boolean = true;

  constructor(
    private readonly httpService: HttpService,
    private readonly diagConfig: DynamicDialogConfig,
    private readonly diagRef: DynamicDialogRef,
    private readonly msg: MessageService
    ) { 
    this.data = diagConfig.data?.azureEnvViewModel;
    this.deletePayload.envName = this.data.terraformWorkspace;
  }

  async ngOnInit() {
    console.log(this.data);
    await this.setJenkinsServerListAndJobList();
    await this.setJenkinsJobBranchList();
  }

  async submit(): Promise<any> {
    try {
      await this.sendDestroyEnvRequest();
      this.msg.add({severity: 'success', summary: 'Trigger Destroy Request Success', detail: ""});
      this.diagRef.close();
    } catch {
      this.msg.add({severity: 'error', summary: 'Trigger Destroy Request Failed', detail: "Please check your payload setting for jenkins account setting"})
      this.diagRef.close();
    }
  }

  async setJenkinsServerListAndJobList() {
    let jenkinsAccounts = await this.getJenkinsAccounts()
    let account = jenkinsAccounts.find(x => x.serverName == this.data.jenkinsServerName);
    // serverName not in jenkinsAccounts
    if (account == undefined){
      this.jenkinsServerNameList = [];
      this.jenkinsJobNameList = [];
    } else {
      this.jenkinsServerNameList = [this.data.jenkinsServerName];
      this.deletePayload.serverName = this.data.jenkinsServerName;
      let jobs = account.jenkinsJobs.map(x => x.jenkinsJobName);
      if (jobs.includes(this.data.jenkinsJobName)){
        this.jenkinsJobNameList = [this.data.jenkinsJobName];
        this.deletePayload.jobName = this.data.jenkinsJobName;
      } else {
        this.jenkinsJobNameList = [];
      }
    }
  }

  async setJenkinsJobBranchList() {
    let branchList: string[] = await this.getJenkinsJobBranchs(this.deletePayload.serverName, this.deletePayload.jobName);
    if (branchList.includes(this.data.jenkinsJobBranch)){
      // reorder the branch list
      this.jenkinsJobBranchList = [this.data.jenkinsJobBranch].concat(branchList.filter(x => x != this.data.jenkinsJobBranch));
      // this.deletePayload.jobBranch = this.data.jenkinsJobBranch;
      this.deletePayload.jobBranch = '8787787';
    }
    else {
      this.jenkinsJobBranchList = branchList;
    }
  }

  async getJenkinsJobBranchs(serverName: string, jobName: string ): Promise<string[]>{
    let getJobBranchParameter: JenkinsJobBranchGetParameter = {
      serverName: serverName,
      jobName: jobName
    }
    let httpParams = new HttpParams({fromObject: getJobBranchParameter});

    let branchList: string[] = [];
    await this.httpService.get({url: ApiUrls.JENKINS_CLIENT_JOB_BRANCH_LIST, params: httpParams}).toPromise().then( res => {
      branchList = res.body;
    });
    return branchList
  }

  async getJenkinsAccounts(): Promise<JenkinsAccountResponse[]> {
    let jenkinsAccounts: JenkinsAccountResponse[] = []
    await this.httpService.get({url: ApiUrls.JENKINS_ACCOUNT}).toPromise().then( res => {
      jenkinsAccounts = res.body;
    });
    return jenkinsAccounts;
  }

  async sendDestroyEnvRequest(): Promise<any> {
    let httpResponse = await this.httpService.post({url: ApiUrls.JENKINS_CLIENT_JOB_TRIGGER_DESTROY_ENV, body: this.deletePayload}).toPromise();
    return httpResponse;
  }

  
}
