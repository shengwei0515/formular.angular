import { Component, OnInit } from '@angular/core';
import { ApiUrls, JenkinsJob } from 'src/app/core/services/http/formularApiContent';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { HttpService } from 'src/app/core/services/http/http.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-delete-jj',
  templateUrl: './delete-jj.component.html',
  styleUrls: ['./delete-jj.component.css']
})
export class DeleteJjComponent implements OnInit {

  modelToDelete: JenkinsJob;

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
    await this.httpService.delete({url: ApiUrls.JENKINS_JOB , params: httpParams}).toPromise();
  }

  onClieckNo(): void {
    this.ref.close();
  }

}
