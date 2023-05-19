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

  currentPage = 1
  loadMore = this.currentPage + 1
  maxPostsPerPage = 4
  nextPosts: Post[] = []

  constructor(private postService: DataService) { }

  ngOnInit() {
    this.getPosts(this.currentPage)
  }

  getPosts(page: number) {
    this.postService.getPostsByPage(page)
      .subscribe((posts: Post[]) => {
        this.posts = posts
        this.uploadedContent = true
        console.log(posts)
      })
  }

  nextPostsPage(page: number) {
    this.postService.getPostsByPage(page)
      .subscribe((nextPosts: Post[]) => {
        this.nextPosts.push(... nextPosts)
        this.uploadedContent = true
        console.log(nextPosts)
      })
  }

  loadMorePosts(): void {
    if (!(this.nextPosts.length % this.maxPostsPerPage !== 0))
      this.nextPostsPage(this.loadMore++)
  }
}
