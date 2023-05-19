import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogSearchPostsComponent } from './components/blog-search-posts/blog-search-posts.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogSearchPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
