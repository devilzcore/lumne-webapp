import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.scss']
})
export class BlogMenuComponent {
  visibleMenu = false
  visibleSearch = false

  inputValue: string = ''

  constructor(private router: Router) {}

  navigateToSearch(): void {
    if (this.inputValue !== '') {
      this.router.navigate(['/search/', this.inputValue])
    }
  }
}
