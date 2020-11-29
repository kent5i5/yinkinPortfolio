import { Component, OnInit ,  Input} from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//import { AccountService } from '../account.service';
import { Title } from '@angular/platform-browser';
import { logging } from 'protractor';
import { Location } from '@angular/common';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
   @Input() topTitle;
   @Input() title;
   @Input() isLoginPage: boolean;
   @Input() isRegisterPage: boolean;

   fbuser;

  accountList;
  account;
  checkoutForm;

  constructor(
    // tslint:disable-next-line: variable-name
	private fbackend : BackendService,
	
    public activeModal: NgbActiveModal,
    //private accountService: AccountService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private location: Location
  ) {
    //this.account = this.accountService.getAccount();

	this.fbuser = this.fbackend.getFbAccount();
    this.checkoutForm = this.formBuilder.group({
     email: [''],
     name: [''],
     password: [''], 
    });
  }

 // firebase retrieve account methods
  ngOnInit() {
    //this.accountList = this.accountService.retrieveAccounts();
  }



  addAccount(account) {

    //window.alert('Your account has been added!');

    //add firebase account
    this.login(account); 

    // List of account CACHED
    this.account.push(account);

  
  }

  reset() {
    this.checkoutForm.reset();
  }

  onSubmit(customerData) {
    //Process checkout data here
    console.warn('Your order has been submitted', customerData);
    var name = customerData.name;
    
    var newAccount = {
      id : 1 ,
      email: customerData.email,
      name : customerData.name,
      password: customerData.password    
    }
    
    this.addAccount(newAccount);
    this.checkoutForm.reset();
    this.activeModal.dismiss();


  }

  onRegister(customerData){
    var email = customerData.email;
    var password = customerData.password;
  /*  this.afAuth_account.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });*/
	this.fbackend.createNewUserWithEmailAndPassword(email, password);
    this.activeModal.dismiss();
  }

  login(accountData) {
 
    var email = accountData.email;
    var password = accountData.password;
    /*this.afAuth_account.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      
    }) */
	this.fbackend.loginWithEmailAndPassword(email, password);
     this.activeModal.dismiss();
  }
  
  // logout() {
  //     this.afAuth_account.auth.signOut();
  // }

}
