import { slugify } from 'src/helpers/string.utils';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from 'src/models/post';
import { DataService } from 'src/services/data.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostsComponent implements OnInit {
  post = {} as Post
  dateStr: string = ''
  loadingPosts = false

  constructor(
    private route: ActivatedRoute,
    private postService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id']
      this.postService.getPostId(Number(id)).subscribe(post => {
        this.post = post
        const slug = slugify(post.title!)
        const url = `/posts/${post.id}/${slug}`
        history.replaceState({}, '', url)

        this.readingTime()
        this.dateStr = this.formatDate(new Date(this.post.postedAt!))
        this.loadingPosts = true
      })
    })
  }

  formatDate(date: Date): string {
    return format(date, 'H:m:s dd-MM-yyyy');
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
