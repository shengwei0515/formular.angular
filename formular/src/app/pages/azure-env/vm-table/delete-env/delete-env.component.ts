import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinsAccountResponse } from 'src/app/core/services/http/formularApiContent';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpResponseBase } from '@angular/common/http';
import { AzureEnvGetBySubscriptionViewModel } from '../vm-table.component'

type DeleteEnvPayload = {
  terraformWorkspace: string, 
  jenkinsServerName: string,
  jenkinsJobName: string,
  jenkinsJobBranch: string,
}


@Component({
  selector: 'app-delete-env',
  templateUrl: './delete-env.component.html',
  styleUrls: ['./delete-env.component.css']
})
export class DeleteEnvComponent implements OnInit {

  data: AzureEnvGetBySubscriptionViewModel = {
    createdDatetime: new Date(), 
    updatedDatetime: new Date(), 
    resourceGroupName: "CyberSaaSSIT",
    terraformWorkspace: "sit",
    jenkinsServerName: "string",
    envOwner: "small_seal",
    jenkinsJobBranch: "develop",
    createdDatetimeString: "20211220",
    updatedDatetimeString: "2021221213"
  }

  deletePayload: DeleteEnvPayload;

  jenkinsServerNameList: string[];
  jenkinsJobNameList: string[];
  jenkinsJobBranchList: string[];
  jenkinsAccounts: JenkinsAccountResponse[] = [];

  constructor(
    private readonly httpService: HttpService
    ) { 
    this.deletePayload = {
      terraformWorkspace: this.data.terraformWorkspace, 
      jenkinsServerName: this.data.jenkinsServerName,
      jenkinsJobName: "Azure.Machine",
      jenkinsJobBranch: this.data.jenkinsJobBranch,
    }

    this.jenkinsServerNameList = [this.data.jenkinsServerName];
    this.jenkinsJobNameList = ["Azure.Machine"];
    this.jenkinsJobBranchList = [this.data.jenkinsJobBranch];
  }


  async serverNameOnFocus(){
    this.jenkinsServerNameList = await (await this.getJenkinsAccounts()).map(x => x.serverName);
  }

  async jenkinsJobNameOnFocus(serverName: string){
    console.log(serverName)
    let jobNameList = await (await this.getJenkinsAccounts()).find(x=>x.serverName == serverName)
                                                                    ?.jenkinsJobs
                                                                    .map(x=>x.jenkinsJobName);
    this.jenkinsJobNameList = jobNameList == undefined ? [] : jobNameList
    console.log(this.jenkinsJobNameList)
  }

  jenkinsJobBranchOnFocus(){

  }

  async getJenkinsAccounts(): Promise<JenkinsAccountResponse[]>{
    let jenkinsAccounts: JenkinsAccountResponse[] = [];
    await this.httpService.get({url: ApiUrls.JENKINS_ACCOUNT}).toPromise().then(res => {
      jenkinsAccounts = res.body;
    });
    return jenkinsAccounts
  }

  submit(): void {
    console.log(this.deletePayload )
  }



  ngOnInit(): void {
  }
}
