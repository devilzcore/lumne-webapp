import { DataService } from 'src/services/data.service';
import { Post } from 'src/models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.scss']
})
export class BlogCategoryComponent implements OnInit {
  post = {} as Post
  posts: Post[] = []

  categoryName: string = ''

  constructor(
    private postService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.route.params.subscribe((params) => {
      const category = params['category']
      this.categoryName = category
      return this.postService.getPostByCategories(category)
      .subscribe(posts => this.posts = posts as Post[])
    })
  }
}
