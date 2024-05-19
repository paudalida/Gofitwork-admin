import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent},
  { path: 'main', 
    component: MainComponent, 
    children: [{
      path: '', 
      loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
    }]
    },
  { path: 'dashboard', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'enquiries', loadChildren: () => import('./main/components/enquiries/enquiries.module').then(m => m.EnquiriesModule) },
  { path: 'members', loadChildren: () => import('./main/components/members/members.module').then(m => m.MembersModule) },
  { path: 'subscriptions', loadChildren: () => import('./main/components/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule) },
  { path: 'dashboard', loadChildren: () => import('./main/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
