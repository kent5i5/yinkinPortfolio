import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-generator',
  templateUrl: './blog-generator.component.html',
  styleUrls: ['./blog-generator.component.css']
})
export class BlogGeneratorComponent implements OnInit {

  newBlogForm;

  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { 
    this.newBlogForm = this.formbuilder.group({
      title: [''],
      author: ['',],
      content: ['',],
      date: [''],
      picture: [''],

    });
  }

  ngOnInit() {
  }

}
