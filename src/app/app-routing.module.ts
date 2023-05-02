import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/helpers/auth.guard';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogLoginComponent } from './blog/components/blog-login/blog-login.component';

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
    path: '',
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
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: BlogLoginComponent }
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
