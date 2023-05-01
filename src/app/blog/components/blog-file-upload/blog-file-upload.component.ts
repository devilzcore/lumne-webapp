import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-blog-file-upload',
  templateUrl: './blog-file-upload.component.html',
  styleUrls: ['./blog-file-upload.component.scss']
})
export class BlogFileUploadComponent implements ControlValueAccessor {
  file: File | null = null;

  onChange: Function | undefined

  @HostListener('change', ['$event.target.files']) entFiles(event: FileList) {
    const file = event && event.item(0)
    if (this.onChange) {
      this.onChange(file)
    }
    this.file = file
    console.log(file)
  }

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private http: HttpClient
    ) { }

  writeValue(value: null) {
    this.host.nativeElement.value = ''
    this.file = null
  }

  registerOnChange(fn: Function) {
    this.onChange = fn
  }

  registerOnTouched(fn: Function) {

  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);

      this.http.post('https://localhost:7193/api/image', formData)
        .subscribe(res => {
          console.log(res);
        });
    }
  }
}
