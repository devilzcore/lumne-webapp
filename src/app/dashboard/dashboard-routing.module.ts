import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/helpers/auth.guard';
import { BlogPostComponent } from '../blog/components/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'post', component: BlogPostComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
