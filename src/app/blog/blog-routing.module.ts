import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/helpers/auth.guard';

import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogLoginComponent } from './components/blog-login/blog-login.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogFileUploadComponent } from './components/blog-file-upload/blog-file-upload.component';
import { BlogCategoryComponent } from './components/blog-category/blog-category.component';
import { BlogSearchPostsComponent } from './components/blog-search-posts/blog-search-posts.component';

const routes: Routes = [
  { path: '', component: BlogHomeComponent },
  { path: 'posts/category/:category', component: BlogCategoryComponent },
  { path: 'posts/:id', component: BlogPostsComponent },
  { path: 'posts/:id/:title?', component: BlogPostsComponent },
  { path: 'card', component: BlogCardComponent },
  { path: 'upload', component: BlogFileUploadComponent },
  { path: 'search/:title', component: BlogSearchPostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
