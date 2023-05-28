import { slugify } from 'src/helpers/string.utils';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/models/post';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostsComponent implements OnInit {
  // post!: Post
  post = {} as Post

  constructor(
    private route: ActivatedRoute,
    private postService: DataService
  ) { }

  ngOnInit() {
    // method 001 GetByDateAndTitle
    // const id = this.route.snapshot.paramMap.get('id')
    // const title = this.route.snapshot.paramMap.get('title')
    // const dateStr = this.route.snapshot.paramMap.get('date');
    // const date = new Date(dateStr!);

    // this.postService.getPostId(Number(id)).subscribe(post => {
    //   this.post = post
    // })

    // method 002 GetById
    this.route.params.subscribe((params) => {
      const id = params['id']
      this.postService.getPostId(Number(id)).subscribe(post => {
        this.post = post
        const slug = slugify(post.title!);
        const url = `/posts/${post.id}/${slug}`;
        history.replaceState({}, '', url);

        this.readingTime()
      })
    })

    // method 003
    // this.postService.getPostId(Number(id)).subscribe(post => {
    //   this.post = post
    // })

    // this.readingTime()
  }

  readingTime() {
    let wordCount = this.post.content?.split(" ").length
    let wpm = 200

    if (wordCount! >= wpm) {
      let minutes = (wordCount!) / wpm
      return ~~minutes + ' minutes to read post.'
    } else {
      let seconds = (wordCount! * 60) / wpm
      return ~~seconds + ' seconds to read post.'
    }
  }
}
