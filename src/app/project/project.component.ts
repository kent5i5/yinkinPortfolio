import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	
  webPageImage = "https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/Moving-Postcard.png"

  iphoneImage = "https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/iphoneversion.PNG"

  apacheSpark = "https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/apacheSparkscreenshot.png"

  apacheSparkShell = "https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/apacheSparkshellscreenshot.png"

  constructor() { }

  ngOnInit() {
  }



}
