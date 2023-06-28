import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardPostsListComponent } from './components/dashboard-posts-list/dashboard-posts-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPostsListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
