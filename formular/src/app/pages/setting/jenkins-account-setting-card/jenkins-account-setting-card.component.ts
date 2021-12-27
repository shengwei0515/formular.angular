import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateJaComponent } from './create-ja/create-ja.component';
import { CreateJjComponent } from './create-jj/create-jj.component';
import { DeleteJaComponent } from './delete-ja/delete-ja.component';
import { DeleteJjComponent } from './delete-jj/delete-jj.component';
import { HttpService } from 'src/app/core/services/http/http.service';
import { ApiUrls, JenkinsAccountResponse, JenkinsAccountParameter, JenkinsJob } from 'src/app/core/services/http/formularApiContent';


@Component({
  selector: 'app-jenkins-account-setting-card',
  templateUrl: './jenkins-account-setting-card.component.html',
  styleUrls: ['./jenkins-account-setting-card.component.css'],
  providers: [ DialogService, ConfirmationService],
})
export class JenkinsAccountSettingCardComponent implements OnInit {

  jenkinsAccounts: JenkinsAccountResponse[] = [];

  constructor(
    private readonly httpService: HttpService,
    private readonly dialogService: DialogService,
    private readonly confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getAllJa();
  }

  getAllJa(): void {
    this.httpService.get({url: ApiUrls.JENKINS_ACCOUNT}).subscribe(res => {
      this.jenkinsAccounts = res.body;
    });
  }

  clickUpdate(): void {
    console.log("update")
  }

  clickAddJenkinsJob(jenkinsAccount: JenkinsAccountResponse){
    var diaglogRef = this.dialogService.open(CreateJjComponent, {
      header: "Creat New JenkinsAccountSetting",
      width: '50%',
      data: {
        jenkinsAccount: jenkinsAccount
      }
    });
    diaglogRef.onClose.subscribe( _ => {
      this.getAllJa();
    })
  }

  clickRemove(modelToDelete: JenkinsAccountResponse): void {
    var diaglogRef = this.dialogService.open(DeleteJaComponent, {
      header: "Aure You Sure Want To Remove Jenkins Account Setting",
      width: '50%',
      data: {
        modelToDelete: modelToDelete
      }
    });
    diaglogRef.onClose.subscribe( _ => {
      this.getAllJa();
    })
  }

  showCreateDiag(): void {
    var diaglogRef: DynamicDialogRef = this.dialogService.open(CreateJaComponent, {
      header: 'Creat New JenkinsAccountSetting',
        width: '50%',
    })
    diaglogRef.onClose.subscribe( _ => {
      this.getAllJa();
    })
  }

  deleteJj(jenkinsJob: JenkinsJob) {
    var diaglogRef = this.dialogService.open(DeleteJjComponent, {
      header: "Aure You Sure Want To Remove Jenkins Account Setting",
      width: '50%',
      data: {
        modelToDelete: jenkinsJob
      }
    });
    diaglogRef.onClose.subscribe( _ => {
      this.getAllJa();
    })
  }
}
