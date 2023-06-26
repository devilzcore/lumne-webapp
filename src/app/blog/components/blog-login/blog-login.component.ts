import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-blog-login',
  templateUrl: './blog-login.component.html',
  styleUrls: ['./blog-login.component.scss']
})
export class BlogLoginComponent implements OnInit {
  loginForm!: FormGroup
  loading = false
  submitted = false
  returnUrl!: string
  error = ''

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard'])
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard'
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    this.loading = true
    this.authenticationService.login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe (
        data => {
          this.router.navigate([this.returnUrl])
        },
        error => {
          this.error = error
          this.loading = false
        })
  }
}
