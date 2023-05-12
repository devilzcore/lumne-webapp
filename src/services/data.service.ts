import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../environments/environment'

import { Post } from '../models/post'
import { Category } from '../models/category'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  url = `${environment.apiUrl}Post`
  urlCategory = `${environment.apiUrl}Category`

  constructor(private httpClient: HttpClient) { }

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPostId(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.url + "/" + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPostsByPage(page: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + "/page/" + page)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getPostByCategories(category: string): Observable<Post> {
    return this.httpClient.get<Post>(this.url + "/category/" + category)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.url, JSON.stringify(post), this.HttpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.url + '/' + post.id, JSON.stringify(post), this.HttpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deletePost(post: Post) {
    return this.httpClient.delete<Post>(this.url + '/' + post.id, this.HttpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.urlCategory)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getCategoryId(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.urlCategory + "/" + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.urlCategory, JSON.stringify(category), this.HttpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.urlCategory + '/' + category.id, JSON.stringify(category), this.HttpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  deleteCategory(category: Category) {
    return this.httpClient.delete<Category>(this.urlCategory + '/' + category.id, this.HttpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Code error: ${error.status}, ` + `{message: ${error.message}}`
    }

    console.log(errorMessage)
    return throwError(errorMessage)
  }
}



