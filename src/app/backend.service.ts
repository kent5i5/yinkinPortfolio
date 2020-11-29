import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Blog, BlogId } from './blog/blog';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  roomRef: AngularFireList<any>;
  messageRef: AngularFireList<any>;

  Rooms:Observable<any[]>;
  RoomKeys:Observable<any[]>;
  
  messageList:Observable<any[]>;
  messageRemoveList:Observable<any[]>; 

  blogCollection: AngularFirestoreCollection<Blog>;
  blogRef: Observable<BlogId[]>;
  blogDocument: AngularFirestoreDocument<Blog>;

  //private lastline = new BehaviorSubject(false);
  //private loding =new BehaviorSubject(false);

  constructor(
	private realtimedb: AngularFireDatabase,
    private afAuth: AngularFireAuth,
	private afs: AngularFirestore,
  ) { 
	this.roomRef = this.realtimedb.list('Room');
    this.messageRef = this.realtimedb.list('Messages');
  }

  // auth functions
  getFbAccount(){
	 return this.afAuth.user;
  }

  getFbUserEmail(){
	 var userEmail;
	 
	 return this.afAuth.auth.currentUser.email;
  }

  createNewUserWithEmailAndPassword(email: string, password: string){
		  this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
		          // Handle Errors here.
		          var errorCode = error.code;
		          var errorMessage = error.message;
		          if (errorCode == 'auth/weak-password') {
		            alert('The password is too weak.');
		          } else {
		            alert(errorMessage);
		          }
		          console.log(error);
		    });
   }
	
  loginWithEmailAndPassword(email: string, password: string){
			this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
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
  
  logout(){
  	this.afAuth.auth.signOut();
  }

  // admin query functions
  adminRoomInit(){
		this.roomRef = this.realtimedb.list('/Room',ref => ref.limitToLast(10).orderByChild('Date'));
    
    	
	    // Use snapshotChanges().map() to store the key;
	    this.Rooms = this.roomRef.snapshotChanges().pipe(
	      map(changes => 
	        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
	      )
		);
		return this.Rooms;
  }
  adminMessageInit() {
		this.messageRef = this.realtimedb.list('Messages');
  }

  getadminMessageWithRoomId(roomId){
	return 	this.realtimedb.list('Messages', ref => ref.orderByChild("Room").equalTo(roomId.toString())).snapshotChanges().pipe(
      map(actions => 
        actions.map(b => ({ key: b.payload.key, ...b.payload.val() }))
      
      )
    );

  }
	
	
  deleteRoom(deleteKey: string){

  	this.roomRef.remove(deleteKey); 
   
  }

  deleteMessage(msnkey: string){
    this.messageRef.remove(msnkey);
  }


  deleteAllMessages(){
     this.messageRef.remove();
  }

  pushMessages(textValue, id){
	var adminUser = this.afAuth.auth.currentUser.email
	/*this.afAuth.user.subscribe(action => {
        adminUser = action.email;
  
    });*/
	
	this.messageRef.push({
        MessageBody : textValue.myMessage ,
        Room : id.toString(),
		Sender : adminUser,
    });	
  }

   // chat query functions
  getChatMessageEqualToValue(value: string){  // valueChanges()
	return 	this.realtimedb.list('Messages', ref => ref.orderByChild("Room").equalTo(value)).valueChanges();

  }

  createNewRoom(newRoom){
	this.roomRef.push(newRoom);	
  }

  createNewMessage( user: string,textValue: string, roomNum: string ){
	this.messageRef = this.realtimedb.list('Messages');
	 this.messageRef.push({
        Sender : user,
        MessageBody : textValue ,
        Room : roomNum,
     });	 
  }

   // blog query functions
  getBlogWithTag(tagValue : string){
	  return this.afs.collection<BlogId>('blog', ref => ref.where('tags' , "array-contains", tagValue)).snapshotChanges().pipe(
	       map(actions => actions.map( a => {
	         const data = a.payload.doc.data() as Blog;
	         const id = a.payload.doc.id;
	         return {id, ...data}
	       }))
	     );
   }

   getblogList(){
	    this.blogCollection = this.afs.collection<Blog>('blog', ref => ref.orderBy('createdDate' ,'desc').limit(20));
		     //this.blogRef = this.blogCollection.valueChanges();
	   return this.blogRef = this.blogCollection.snapshotChanges().pipe(
			       map(actions => actions.map( a => {
			         const data = a.payload.doc.data() as Blog;
			         const id = a.payload.doc.id;
			         return {id, ...data}
			       }))
      		 );	
   }

	getNext4List(){
		this.blogCollection = this.afs.collection<Blog>('blog' , ref => ref.orderBy('createdDate' ,'desc').startAfter(3).limit(2));
		
		
		return this.blogRef = this.blogCollection.snapshotChanges().pipe(
			       map(actions => actions.map( a => {
			         const data = a.payload.doc.data() as Blog;
						const id = a.payload.doc.id;
			         return {id, ...data}
			       }))
      		 );	

	}

   getDocumentWithId(id){
		this.blogDocument = this.afs.doc<Blog>("blog/"+id);
        return this.blogDocument.valueChanges();
    }
}
