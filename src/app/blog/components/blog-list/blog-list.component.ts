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
  uploadedContent: boolean = false

  loadMore = 4
  limit = 6
  totalPosts = 0

  constructor(private postService: DataService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts.slice(0, this.loadMore)
        this.uploadedContent = true
        console.log(posts)
      })
  }

  loadMorePosts(): void {
    this.loadMore++
    this.getPosts()
  }
}
