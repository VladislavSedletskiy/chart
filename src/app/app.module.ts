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
import {ModalComponent} from "./pages/Modal/modal.component";
import { AddChartComponent } from './components/add-chart/add-chart.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import {ChartQuery} from "./State/chart.query";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SettingComponent,
    NavigationComponent,
    ChartComponent,
    ModalComponent,
    AddChartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HighchartsChartModule,
        ChartModule,
      ReactiveFormsModule,
      environment.production ? [] : AkitaNgDevtools.forRoot(),
      AkitaNgRouterStoreModule,
    ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }


