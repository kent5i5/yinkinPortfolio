import { Component, OnInit } from '@angular/core';
//import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Blog , BlogId} from '../blog';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  //blogCollection: AngularFirestoreCollection<Blog>;
  //blogDocument: AngularFirestoreDocument<Blog>;

  blogRef: Observable<Blog>;
  BlogId: string; 

  constructor(
    private fbackend : BackendService,
    //private afs: AngularFirestore,
    private route: ActivatedRoute,
    private markdownService: MarkdownService,
  ) {
    this.BlogId = this.route.snapshot.paramMap.get('id');
      //this.blogDocument = this.afs.doc<Blog>("blog/"+this.BlogId);
      //this.blogRef =  this.blogDocument.valueChanges();
		this.blogRef = this.fbackend.getDocumentWithId(this.BlogId);
   

  }

  ngOnInit() {
    //  let timestamp: TimeInterval = 1541764115618
    // let date = Date(timeIntervalSince1970: timestamp)
  
    // this.markdownService.renderer.html = () =>{
    //   const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    //   return '<h>' +
    //            '<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">' +
    //              '<span class="header-link"></span>' +
    //            '</a>' 
    //          '</h>';
    // }
  }

  

}
