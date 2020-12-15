import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import LinkJson from '../../assets/links.json';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private sub: Subscription;
  post: string;
  private _jsonURL = 'assets/SampleJson.json';
  private links;
  private listOflinks
  private id

  constructor(private route: ActivatedRoute) {
    console.log('Reading local json files');
    console.log(LinkJson);
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']
      this.post = './assets/posts/' +  params['id'] + '.md';
    });
    //this.post = "./assets/posts/post1.md"
    this.links = LinkJson
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}

