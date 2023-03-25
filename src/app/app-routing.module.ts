import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogLoginComponent } from './blog-login/blog-login.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogFileUploadComponent } from './blog-file-upload/blog-file-upload.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from 'src/helpers/auth.guard';
import { BlogCategoryComponent } from './blog-category/blog-category.component';

const routes: Routes = [
  { path: '', component: BlogHomeComponent },
  { path: 'login', component: BlogLoginComponent },
  { path: 'post', component: BlogPostComponent, canActivate: [AuthGuard] },
  { path: 'posts/category/:category', component: BlogCategoryComponent },
  { path: 'posts/:id', component: BlogPostsComponent },
  { path: 'posts/:id/:title?', component: BlogPostsComponent },
  { path: 'card', component: BlogCardComponent },
  { path: 'upload', component: BlogFileUploadComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
