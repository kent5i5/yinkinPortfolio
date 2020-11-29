import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,ReactiveFormsModule, } from '@angular/forms';


@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

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
