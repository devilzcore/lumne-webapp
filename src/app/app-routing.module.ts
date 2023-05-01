import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BlogLayoutComponent,
    children: [
      {
        path: '', loadChildren: () =>
          import('./blog/blog.module')
            .then(m => m.BlogModule)
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard', loadChildren: () =>
          import('./dashboard/dashboard.module')
            .then(m => m.DashboardModule)
      }
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
