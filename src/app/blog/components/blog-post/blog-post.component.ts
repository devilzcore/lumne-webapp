import { AuthenticationService } from '../../../../services/auth.service';
import { Category } from '../../../../models/category';
import { DataService } from '../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/models/post';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  category = {} as Category
  categories: Category[] = []

  postForm!: FormGroup

  currentUser?: User

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '35rem',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'http://localhost:7193/api/image',
    uploadWithCredentials: false,
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: DataService,
    private postService: DataService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    this.postForm = this.formBuilder.group({
      id: ['0'],
      title: ['', Validators.required],
      image: [''],
      summary: [''],
      content: [''],
      category: ['']
    })

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
  }

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories
        console.log(categories)
      })
  }

  addCategoryInSelect() {
    const newValue = prompt("New value:")

    if (newValue != null) {
      this.categoryService.saveCategory({name: newValue })
      .subscribe(category => {
        console.log('Save..', category)
        this.postForm.reset()
      })
    }
  }

  post() {
    const categories: Category[] = [{
      name: this.postForm.controls['category'].value
    }];

    const post: Post = {
      id: this.postForm.controls['id'].value,
      title: this.postForm.controls['title'].value,
      image: this.postForm.controls['image'].value,
      content: this.postForm.controls['content'].value,
      categories: categories
    }

    return post
  }

  savePost() {
    this.postService.savePost(this.post())
      .subscribe(post => {
        console.log('Save..', post)
        this.postForm.reset()
      })
  }

  updatePost() {
    this.postService.updatePost(this.post())
      .subscribe(post => { console.log('Edit..', this.post()) })
  }

  deletePost() {
    this.postService.deletePost(this.post())
      .subscribe(post => console.log('deleted..', post))
  }

  logout() {
    this.authenticationService.logout()
    this.router.navigate(['/login'])
  }
}
