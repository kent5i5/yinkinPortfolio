import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	loginUserName: string;


  constructor(
	
	private route: ActivatedRoute,
  ) { 
	
		this.loginUserName = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
