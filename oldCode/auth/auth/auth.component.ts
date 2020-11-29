import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AccountService } from '../account.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  message: string;

  constructor(
     private accountService: AccountService,
     public router: Router,
  ) { 
    this.setMessage();
  }

  ngOnInit() {
  }
  setMessage() {
    this.message = 'Logged ' + (this.accountService.isLoggedIn ? 'in' : 'out');
  }

  login(accountData) {
    this.message = 'Trying to log in ...';

    var email = accountData.email;
    var password = accountData.password;
    this.accountService.loginWithEmailAndPassword(email, password);

      this.accountService.login().subscribe(() => {
        this.setMessage();
        if (this.accountService.login){
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.accountService.redirectUrl ? this.router.parseUrl(this.accountService.redirectUrl) : '/admin';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          // Redirect the user
          this.router.navigateByUrl(redirect, navigationExtras);
        }
      });

  }

  logout() {
    this.accountService.logout();
   // this.setMessage();
  }
}
