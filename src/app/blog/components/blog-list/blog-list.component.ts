import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../models/post'
import { DataService } from '../../../../services/data.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  post = {} as Post
  posts: Post[] = []
  uploadedContent: boolean | undefined

  constructor(private postService: DataService) { }

  ngOnInit() {
    this.getPosts()
    this.uploadedContent = false
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts
        console.log(posts)
        this.uploadedContent = true
      })
  }
}
