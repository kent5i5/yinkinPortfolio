import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from '../app.component';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']

})
export class TopNavbarComponent implements OnInit {

  hero = 'windstorm';
  lackery = 'no luck';

   fbuser;

  constructor(
    // tslint:disable-next-line: variable-name
    private fbackend : BackendService,
    private modalService: NgbModal

  ) {
	this.fbuser = fbackend.getFbAccount();
  }


  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(AccountComponent);
    modalRef.componentInstance.topTitle = 'You can create a account to post command on my blog';
    modalRef.componentInstance.isLoginPage = false;
    modalRef.componentInstance.isRegisterPage = true;
  }

  login() {
    const modalRef = this.modalService.open(AccountComponent);
    modalRef.componentInstance.topTitle = 'Weclome Back!';
    modalRef.componentInstance.title = 'Login ';
    modalRef.componentInstance.isRegisterPage = false;
    modalRef.componentInstance.isLoginPage = true;
    // var email = "yinkin@yinkin.com";
    // var password = "qwerty";
    // this.afAuth_topnav.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);
    // })
    //this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());  
  }

  logout() {
	  this.fbackend.logout();
      location.reload();
  }

}

