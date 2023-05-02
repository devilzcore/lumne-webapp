import { ErrorInterceptor } from './../helpers/error.interceptor';
import { JwtInterceptor } from './../helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';
import { BlogCardComponent } from './blog/components/blog-card/blog-card.component';
import { BlogMenuComponent } from './blog/components/blog-menu/blog-menu.component';
import { BlogLoginComponent } from './blog/components/blog-login/blog-login.component';
import { BlogHomeComponent } from './blog/components/blog-home/blog-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostComponent } from './blog/components/blog-post/blog-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogPostsComponent } from './blog/components/blog-posts/blog-posts.component';
import { BlogCategoryComponent } from './blog/components/blog-category/blog-category.component';
import { BlogCategoriesComponent } from './blog/components/blog-categories/blog-categories.component';
import { BlogFileUploadComponent } from './blog/components/blog-file-upload/blog-file-upload.component';
import { BlogSideCardComponent } from './blog/components/blog-side-card/blog-side-card.component';
import { BlogFooterComponent } from './blog/components/blog-footer/blog-footer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { DashboardNavbarComponent } from './dashboard/components/dashboard-navbar/dashboard-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogCardComponent,
    BlogMenuComponent,
    BlogLoginComponent,
    BlogHomeComponent,
    PageNotFoundComponent,
    BlogPostComponent,
    BlogPostsComponent,
    BlogCategoryComponent,
    BlogCategoriesComponent,
    BlogFileUploadComponent,
    BlogSideCardComponent,
    BlogFooterComponent,
    DashboardLayoutComponent,
    BlogLayoutComponent,
    DashboardNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
