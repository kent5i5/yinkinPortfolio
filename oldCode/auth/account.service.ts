import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountList = [];
  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private http: HttpClient,

    public afAuth_global: AngularFireAuth,
  ) { }

  addAccount(newAccount: any) {
    this.accountList.push(newAccount);
  }

  getAccount() {
    return this.accountList;
  }

  deleteAccount() {
    this.accountList = [];
    return this.accountList;
  }

  retrieveFirebaseAccounts() {
    // if (this.afAuth_global.auth.isSignInWithEmailLink) {return this.afAuth_global.auth.currentUser.email;} 
    // else { return null;}

    return this.afAuth_global.auth.currentUser.email;
    //return this.http.get('/assets/accounts.json');
    
  }

  loginWithEmailAndPassword(email:string, password: string){
    this.afAuth_global.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  login(): Observable<boolean> {
    // return of(true).pipe{
    //   delay(1000),
    //   tap(val => this.isLoogedIn = true)
   if (this.afAuth_global.auth.currentUser != null){

     return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      );
     } 
     
  }

  logout():void{
    this.isLoggedIn = false;
  }

  accountState(){
    if (this.afAuth_global.auth.currentUser != null){
      return true;
    }
  }
}
