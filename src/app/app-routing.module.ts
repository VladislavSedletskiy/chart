import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./pages/view/view.component";
import {SettingComponent} from "./pages/setting/setting.component";

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'setting', component: SettingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
