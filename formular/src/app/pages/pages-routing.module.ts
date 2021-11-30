import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AzureEnvComponent } from './azure-env/azure-env.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: "setting",
    component: SettingComponent
  },
  {
    path: "azure-env",
    component: AzureEnvComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
