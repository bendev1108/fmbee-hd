import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { SettingComponent } from './nav/setting/setting.component';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationSCFComponent } from './information-scf/information-scf.component';
import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups/sugarcane-cue-groups.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScqDetailsComponent } from './sugarcane-cue-groups/scq-details/scq-details.component';
import { ScqFormsComponent } from './sugarcane-cue-groups/scq-forms/scq-forms.component';
import { MapDetailComponent } from './map/map-detail/map-detail.component';
import { PromotionMoneyComponent } from './information-scf/promotion-money/promotion-money.component';
import { ProductionWfoComponent } from './information-scf/production-wfo/production-wfo.component';
import { ProductionWfoFormComponent } from './information-scf/production-wfo-form/production-wfo-form.component';
import { ProductionWfoDetailComponent } from './information-scf/production-wfo-detail/production-wfo-detail.component';
import { PromotionMoneyFormComponent } from './information-scf/promotion-money-form/promotion-money-form.component';
import { PromotionMoneyDetailComponent } from './information-scf/promotion-money-detail/promotion-money-detail.component';
import { PlotFormComponent } from './plot/plot-form/plot-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotActivityComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SettingComponent,
    PlotActivityNextComponent,
    DashboardComponent,
    InformationSCFComponent,
    SugarcaneCueGroupsComponent,
    MapComponent,
    PlotComponent,
    LoginComponent,
    PlotDetailComponent,
    PagenotfoundComponent,
    ScqDetailsComponent,
    ScqFormsComponent,
    MapDetailComponent,
    PromotionMoneyComponent,
    ProductionWfoComponent,
    ProductionWfoFormComponent,
    ProductionWfoDetailComponent,
    PromotionMoneyFormComponent,
    PromotionMoneyDetailComponent,
    PlotFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
