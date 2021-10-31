import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SettingComponent } from './setting/setting.component';
import { VmTableComponent } from './vm-table/vm-table.component';

const routes: Routes = [
  {
    path: "setting",
    component: SettingComponent
  },
  {
    path: "vm-table",
    component: VmTableComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
