import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post'
import { ActivatedRoute, Router } from '@angular/router';
import { slugify } from 'src/helpers/string.utils';
import { format } from 'date-fns';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})

export class BlogCardComponent implements OnInit {
  @Input() post!: Post

  postUrl: string | undefined
  dateStr: string | undefined

  constructor() { }

  formatDate(date: Date): string {
    return format(date, 'yyyy-MM-dd');
  }

  ngOnInit() {
    const slug = slugify(this.post.title!)
    this.dateStr = this.formatDate(new Date(this.post.postedAt!))
    this.postUrl = `/posts/${this.post.id}/${slug}`
  }
}


