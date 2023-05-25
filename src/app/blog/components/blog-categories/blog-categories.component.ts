import { Component, Input } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  @Input() post!: Post

  randomColor() {
    let colors = ['pink', 'red']
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
  }
}
