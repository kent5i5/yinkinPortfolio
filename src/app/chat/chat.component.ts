import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//import { AngularFireModule } from '@angular/fire'
//import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireAction, AngularFireObject, AngularFireList} from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';
import { Message } from '../message';
//import { messaging } from 'firebase';
import { Room } from '../room';
//import { AngularFireAuth } from '@angular/fire/auth';
import { registerLocaleData } from '@angular/common';

import { BackendService } from '../backend.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'], 
  styles: ['.modal-dialog{ position: fixed; float:right;width: 600px;max-width: 100%;height: 100%;}']
})
export class ChatComponent implements OnInit {
  //@Input() chatRoomNum;
  registeredUser;
  fbuser;
  
  //roomRef: AngularFireList<any>;
  //messageRef: AngularFireList<any>;

  messageList:Observable<any[]>;
  Rooms:Observable<any[]>;

  name;
  messageForm;
  textValue;
  isValidFormSubmitted = null;
  userForm;

  currentUser;
  roomNum = null;
  currentRoomNum;
  timestamp;
  messageSended;

  constructor(
	private fbackend : BackendService,
	
    public Modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
	private modalService: NgbModal,
	
    //private realtimedb: AngularFireDatabase,
    //public afAuthchat: AngularFireAuth,
    
  ) {

    

    this.messageForm = this.formBuilder.group({  
      textMessage:['',Validators.maxLength(45)]
    });

    /*this.afAuthchat.user.subscribe(action => {
        this.registeredUser = action.email;
  
    });*/

	 //this.roomRef = this.realtimedb.list('/Room');
    //this.messageRef = this.realtimedb.list('/Messages');
    //this.maxRoomRef = realtimedb.object('roomCount');

	this.fbuser = this.fbackend.getFbAccount();
	this.fbuser.subscribe(action => {
        this.registeredUser = action.email;
	});

    this.registeredUser = this.currentUser;
   }

  ngOnInit() {


    this.currentUser = this.registeredUser;

    //this.messageList = this.realtimedb.list('/Messages', ref => ref.orderByChild('Room').equalTo(this.roomNum)).valueChanges()
    
    //this.retrieveData(this.roomNum);

	
  }

  get parimaryEmail(){
    return this.userForm.get('primaryEmail');
  }

  createNewRoom(){
    var newRoom;
    
    this.timestamp = new Date().getTime();

    if (this.registeredUser == null){
      newRoom = {
        Member: {1: "ocean", 2: "yinkin@yinkin.com"},
        RoomCreator: "any",
        RoomId: this.roomNum.toString(),
        Date: this.timestamp
      };
    } else{
      newRoom = {
        Member: {1: "ocean", 2: "yinkin@yinkin.com"},
        RoomCreator: this.registeredUser,
        RoomId: this.roomNum.toString(),
        Date: this.timestamp
      };
   }
    //this.roomRef.push(newRoom);
	this.fbackend.createNewRoom(newRoom);

  }

  public retrieveData(roomNum) {

    if(this.registeredUser !== null){
        //this.messageList = this.realtimedb.list('/Messages', ref => ref.equalTo(this.registeredUser)).valueChanges()
		this.messageList = this.fbackend.getChatMessageEqualToValue(this.registeredUser);
    } 
    if (roomNum !== null) {
		
      //this.messageList = this.realtimedb.list('/Messages', ref => ref.orderByChild('Room').equalTo(roomNum)).valueChanges()
    	this.messageList = this.fbackend.getChatMessageEqualToValue(roomNum);
	}
  }

  public setCurrentUser(){
    this.currentUser = this.registeredUser;
  }

  reset() {
    this.messageForm.reset();
  }

  onSubmit(newText){

    this.textValue = newText.textMessage;
    if (this.registeredUser == null){ this.registeredUser  = this.name;}
   
    if(this.roomNum === null){
      this.roomNum = Math.random() * 100000000000000000;
      this.createNewRoom()
      
    }
    
   /* this.messageRef.push({
        Sender : this.registeredUser,
        MessageBody : this.textValue ,
        Room : this.roomNum.toString(),
    });*/
	if(this.registeredUser != null && newText !== ""){
		this.fbackend.createNewMessage(this.registeredUser,this.textValue, this.roomNum.toString());
		this.messageSended = true;
	} else{
		this.messageSended = false;
	}
  
    // if the user enter their name and new message , we createa a new room and then new message and retrieve it.
    //this.retrieveData(this.roomNum.toString());
	
	
    this.reset();

  }



  updateMaxRoom() {
    this.Modal.dismiss();
   
  }


  /*signInAsAnonymous(){
      this.afAuthchat.auth.signInAnonymously();
      this.registeredUser = this.afAuthchat.user.subscribe(action => {
        this.currentUser = action.email;
      });
  } */ 

  onNgDestory() {
   
  }

}
