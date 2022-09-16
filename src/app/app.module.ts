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
import { ModalUpdateComponent } from './pages/modal-update/modal-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SettingComponent,
    NavigationComponent,
    ChartComponent,
    ModalComponent,
    AddChartComponent,
    ModalUpdateComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HighchartsChartModule,
        ChartModule,
      ReactiveFormsModule,
      environment.production ? [] : AkitaNgDevtools.forRoot(),
      AkitaNgRouterStoreModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatFormFieldModule,
      MatSelectModule,
      MatButtonModule,
      MatDividerModule,
    ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }


