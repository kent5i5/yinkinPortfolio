import { Component} from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'yinkin-app';
 
  constructor(
    //public db: AngularFireDatabase,
    //public afAuth: AngularFireAuth
  ) {
    //this.items = db.list('list').valueChanges();
  }


}
