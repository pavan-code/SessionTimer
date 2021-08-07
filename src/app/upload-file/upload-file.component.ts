import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.show = false;
    this.final =false;
    this.text = 'Please wait..';
  }
  show: boolean = false;
  final: boolean = false;
  file: string | ArrayBuffer;
  files: File[] = [];
  text: string = 'Please wait..';
  onSelect(event) {
    this.files = [];
    this.files.push(...event.addedFiles);
    const file = event.addedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result;
    };
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  upload() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
      this.final = true;
      this.files = [];
    }, 2000);
  }
}
