import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinsAccountResponse } from 'src/app/core/services/http/formularApiContent';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-delete-ja',
  templateUrl: './delete-ja.component.html',
  styleUrls: ['./delete-ja.component.css']
})
export class DeleteJaComponent implements OnInit {

  modelToDelete: JenkinsAccountResponse;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private readonly httpService: HttpService
    ) { 
      this.modelToDelete = this.config.data.modelToDelete;
    }

  ngOnInit(): void {
  }

  async onClieckYes(): Promise<any> {
    await this.deleteJa();
    this.ref.close();
  }

  async deleteJa(): Promise<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("id", this.modelToDelete.id);
    await this.httpService.delete({url: ApiUrls.JENKINS_ACCOUNT , params: httpParams}).toPromise();
  }

  onClieckNo(): void {
    this.ref.close();
  }

}
