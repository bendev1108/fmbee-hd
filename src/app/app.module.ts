import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { SettingComponent } from './nav/setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationSCFComponent } from './information-scf/information-scf.component';
import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups/sugarcane-cue-groups.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MapDetailComponent } from './map/map-detail/map-detail.component';
import { PromotionMoneyComponent } from './information-scf/promotion-money/promotion-money.component';
import { ProductionWfoComponent } from './information-scf/production-wfo/production-wfo.component';
import { LogoutComponent } from './logout/logout.component';
import { TestComponent } from './test/test.component';
import { NotificationComponent } from './notification/notification.component';
import { ExcelComponent } from './excel/excel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SettingComponent,
    DashboardComponent,
    InformationSCFComponent,
    SugarcaneCueGroupsComponent,
    MapComponent,
    PlotComponent,
    LoginComponent,
    PlotDetailComponent,
    PagenotfoundComponent,
    MapDetailComponent,
    PromotionMoneyComponent,
    ProductionWfoComponent,
    LogoutComponent,
    TestComponent,
    NotificationComponent,
    ExcelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports: [MatDatepickerModule],
  providers: [ErrorHandler],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
