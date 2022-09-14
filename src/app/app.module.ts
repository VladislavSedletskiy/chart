import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './pages/view/view.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HighchartsChartModule} from "highcharts-angular";
import { ChartComponent } from './components/charts/charts.component';
import {ChartModule} from "angular-highcharts";
import {ModalService} from "./pages/Modal/modal.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SettingComponent,
    NavigationComponent,
    ChartComponent,
    ModalService,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HighchartsChartModule,
        ChartModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


