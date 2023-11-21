import { Component } from '@angular/core';
import { Post } from 'src/models/post';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-dashboard-posts-list',
  templateUrl: './dashboard-posts-list.component.html',
  styleUrls: ['./dashboard-posts-list.component.scss']
})
export class DashboardPostsListComponent {
  posts: Post[] = []

  constructor(private postService: DataService) { }

  ngOnInit() {
    this.getPosts(1)
  }

  getPosts(page: number) {
    this.postService.getPostsByPage(page)
      .subscribe((posts: Post[]) => {
        this.posts = posts
        console.log(posts)
      })
  }

  edit(post: number) {
    console.log(post)
  }
}
