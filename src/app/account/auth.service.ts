import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';

//import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireDatabase } from '@angular/fire/database';

//firebase account interface
interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(
    //private afAuth: AngularFireAuth,
   // private realtimedb: AngularFireDatabase,
    private router: Router
  ) {
    
    //// Get auth data, then get firestore user document || null
/*      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.realtimedb.object('Message').valueChanges()
          } else {
            return of(null)
          }
        })
      )
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });*/
  }
}
