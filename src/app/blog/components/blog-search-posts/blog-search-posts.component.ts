import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/models/post';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-blog-search-posts',
  templateUrl: './blog-search-posts.component.html',
  styleUrls: ['./blog-search-posts.component.scss']
})
export class BlogSearchPostsComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private route: ActivatedRoute,
    private postService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const title = params['title']
      this.getPosts(title)
    })
  }

  getPosts(title: string) {
    this.postService.getPostByTitle(title)
      .subscribe((posts: Post[]) => {
        this.posts = posts
      })
  }
}
