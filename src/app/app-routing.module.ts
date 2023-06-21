import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScqDetailsComponent } from './sugarcane-cue-groups/scq-details/scq-details.component';
import { MapDetailComponent } from './map/map-detail/map-detail.component';
import { ProductionWfoComponent } from './information-scf/production-wfo/production-wfo.component';
import { PromotionMoneyComponent } from './information-scf/promotion-money/promotion-money.component';
import { ProductionWfoFormComponent } from './information-scf/production-wfo-form/production-wfo-form.component';
import { PromotionMoneyFormComponent } from './information-scf/promotion-money-form/promotion-money-form.component';
import { PromotionMoneyDetailComponent } from './information-scf/promotion-money-detail/promotion-money-detail.component';
import { ScqFormsComponent } from './sugarcane-cue-groups/scq-forms/scq-forms.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Plot', component: PlotComponent },
  { path: 'Plot/:itid/:fmname', component: PlotDetailComponent },
  { path: 'PlotActivity', component: PlotActivityComponent },
  { path: 'PlotActivityNext', component: PlotActivityNextComponent },
  { path: 'SugarcaneCueGroups', component: ScqFormsComponent },
  { path: 'ScqDetails', component: ScqDetailsComponent },
  { path: 'Map', component: MapComponent },
  { path: 'MapDetail', component: MapDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Withdraw factors of production', component: ProductionWfoComponent },
  { path: 'Withdraw factors of production Form', component: ProductionWfoFormComponent },
  { path: 'Promotion money', component: PromotionMoneyComponent },
  { path: 'promotion money form', component: PromotionMoneyFormComponent },
  { path: 'promotion money detail', component: PromotionMoneyDetailComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
