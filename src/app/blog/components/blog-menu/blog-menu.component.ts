import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.scss']
})
export class BlogMenuComponent {
  visibleMenu = false
  visibleSearch = false

  inputValue: string = ''
}
