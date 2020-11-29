import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, BlogId } from '../blog';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-tag-listing',
  templateUrl: './tag-listing.component.html',
  styleUrls: ['./tag-listing.component.css']
})
export class TagListingComponent implements OnInit {
  blogRef: Observable<BlogId[]>;
  tagValue: string;

  constructor(
	private fbackend : BackendService,
    private route: ActivatedRoute, 
  ) {
    this.tagValue = this.route.snapshot.paramMap.get('value');
	try {
		this.blogRef = this.fbackend.getBlogWithTag(this.tagValue);
	} catch {
		//console.log(e);
	}


  }

  ngOnInit() {
  }

}
