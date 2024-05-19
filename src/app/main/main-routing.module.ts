import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';
import { MembersComponent } from './components/members/members.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path : 'dashboard', component: DashboardComponent},
  { 
    path: 'enquiries', 
    component: EnquiriesComponent, 
    children: [{
      path: '', 
      loadChildren: ()=>import ('./components/enquiries/enquiries.module').then((m)=>m.EnquiriesModule)
    }]
  }, 
  { 
    path: 'members', 
    component: MembersComponent, 
    children: [{
      path: '', 
      loadChildren: ()=>import ('./components/members/members.module').then((m)=>m.MembersModule)
    }]
  }, 
  { 
    path: 'subscriptions', 
    component: SubscriptionsComponent, 
    children: [{
      path: '', 
      loadChildren: ()=>import ('./components/subscriptions/subscriptions.module').then((m)=>m.SubscriptionsModule)
    }]
  }, 

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
