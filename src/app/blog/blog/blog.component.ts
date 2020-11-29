import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { __param } from 'tslib';
//import { BlogService } from '../blog.service';
import { Blog, BlogId } from '../blog';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogStyle;
  blogRef: Observable<BlogId[]>;
  selectedAuthor: string;

	loadmore = false;
	
	blogid;

  constructor(
	private fbackend : BackendService,
    //private blogService: BlogService,
    private route: ActivatedRoute,
  ) {

	 this.blogRef = this.fbackend.getblogList();
	
  }

  ngOnInit() {
    // this.blogRef$ = this.route.paramMap.pipe(
    //   switchMap(params =>{
    //     this.selectedAuthor = params.get('author');
    //      return this.blogService.retrieveBlogByAuthor();
    //   })
    // );
    this.blogStyle = {
       'background-image': "url('blog.thumbnail'),"
    };

	//getDocumentWithId(id) // blodid
	
     
  }
 
  getNext() {
	
	
	this.blogRef = this.fbackend.getNext4List()
	
	
	this.loadmore = true;
  }


  getBlog(){
    //return this.blogService.retrieveBlogByTags(); // Obervable<Blog>  - BLOG: Blog

  }

}
