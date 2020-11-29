import { Component, OnInit } from '@angular/core';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable} from 'rxjs';
//import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //roomRef: AngularFireList<any>;
  //messageRef: AngularFireList<any>; 

  Rooms:Observable<any[]>;
  RoomKeys:Observable<any[]>;
  
  messageList:Observable<any[]>;
  messageRemoveList:Observable<any[]>;

  fbuser;
 
  selectedRoom;
  id;


  constructor(
	private fbackend : BackendService,
	
    //private realtimedb: AngularFireDatabase,
    //public afAuthBody: AngularFireAuth,
  ) {
    //this.roomRef = this.realtimedb.list('/Room',ref => ref.limitToLast(10).orderByChild('Date'));
    //this.messageRef = this.realtimedb.list('/Messages');
    
    // Use snapshotChanges().map() to store the key;
    /*this.Rooms = this.roomRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );*/
	this.fbuser = fbackend.getFbAccount();
	this.Rooms = fbackend.adminRoomInit();
  }


  ngOnInit() {

    //this.Rooms = this.roomRef.valueChanges();
  }

  onSelectMessage(roomId){
    this.selectedRoom = roomId;
    //this.messageList = this.realtimedb.list('/Messages', ref => ref.orderByChild("Room").equalTo(this.selectedRoom.toString())).valueChanges()
    /*this.messageList = this.realtimedb.list('Messages', ref => ref.orderByChild("Room").equalTo(this.selectedRoom.toString())).snapshotChanges().pipe(
      map(actions => 
        actions.map(b => ({ key: b.payload.key, ...b.payload.val() }))
      
      )
    );*/

	this.messageList = this.fbackend.getadminMessageWithRoomId(roomId);

  }

  deleteRoom(deleteKey: string){

    //this.roomRef.remove(deleteKey); 
	this.fbackend.deleteRoom(deleteKey);
   
  }

  deleteMessage(msnkey: string){
	this.fbackend.deleteMessage(msnkey)
  }


  deleteAllMessages(){
     this.fbackend.deleteAllMessages();
  }

}
