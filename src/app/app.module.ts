import { ErrorInterceptor } from './../helpers/error.interceptor';
import { JwtInterceptor } from './../helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogMenuComponent } from './blog-menu/blog-menu.component';
import { BlogLoginComponent } from './blog-login/blog-login.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { BlogFileUploadComponent } from './blog-file-upload/blog-file-upload.component';
import { BlogSideCardComponent } from './blog-side-card/blog-side-card.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';

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
    BlogFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
