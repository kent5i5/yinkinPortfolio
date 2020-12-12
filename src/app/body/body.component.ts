import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  date = ""
  //images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  yinkinWebsiteImage = 'http://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/Moving-Postcard.png';
  linkedin = 'https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/linkedin-logo24x24.png';
  
  constructor(

    config: NgbCarouselConfig
  ) {

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
