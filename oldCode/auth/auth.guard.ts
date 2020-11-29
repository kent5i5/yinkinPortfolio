import { Injectable } from '@angular/core';
import { 
  CanActivate, CanActivateChild, 
  CanLoad, Route, 
  UrlSegment, ActivatedRouteSnapshot, NavigationExtras,
  RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private afAuth: AngularFireAuth, private accountService: AccountService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    
      if (this.accountService.accountState()){
        return true;
      }
      //this.router.navigate(['/']);
      return true;
    
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return this.canActivate(next, state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    //return true;
    let url = `/${route.path}`;
    return this.checkAccount(url);
  }

  checkAccount(url:string):boolean {
    // Store the attempted URL for redirecting
    this.accountService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };


    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
