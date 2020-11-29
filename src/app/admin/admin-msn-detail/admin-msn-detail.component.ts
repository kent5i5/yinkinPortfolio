import { Component, OnInit, Input } from '@angular/core';
//import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Identifiers } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms';
//import { AngularFireAuth } from '@angular/fire/auth';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-admin-msn-detail',
  templateUrl: './admin-msn-detail.component.html',
  styleUrls: ['./admin-msn-detail.component.css']
})
export class AdminMsnDetailComponent implements OnInit {
  @Input() key: string;
  id;

  adminUser : string;

  //messageRef: AngularFireList<any>; 
  messageList:Observable<any[]>;
  location: any;
  adminform;

  // adminForm = new FormGroup({
  //   myMessage: new FormControl(''),
  // });

  

  constructor(
	private fbackend : BackendService,
	
    //public afAuthAdmin: AngularFireAuth,
    //private realtimedb: AngularFireDatabase,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { 
    this.adminform = this.formBuilder.group({  
      myMessage:['',Validators.maxLength(45)]
    });

    //this.messageRef = this.realtimedb.list('/Messages');
    /*this.afAuthAdmin.user.subscribe(action => {
        this.adminUser= action.email;
  
    });*/
  }

  ngOnInit() {
    this.getMsn();

     
  }

  getMsn(){
    this.id = this.route.snapshot.paramMap.get('id');
    /*this.messageList = this.realtimedb.list('/Messages', ref => ref.orderByChild("Room").equalTo(this.id.toString())).snapshotChanges().pipe(
      map(actions => 
        actions.map(b => ({ key: b.payload.key, ...b.payload.val() }))
      
      )
    );*/
	this.messageList = this.fbackend.getadminMessageWithRoomId(this.id);
  }

  reset(){
    this.adminform.reset();
  }

  // deleteRoom(deleteKey: string){

  //   this.roomRef.remove(deleteKey); 
   
  // }

  deleteMessage(msnkey: string){
    //this.messageRef.remove(msnkey);
	this.fbackend.deleteMessage(msnkey);
  }

  onSubmit(textValue){
    this.reset();
    /*this.messageRef.push({
        Sender : this.adminUser,
        MessageBody : textValue.myMessage ,
        Room : this.id.toString(),
    });*/
	this.fbackend.pushMessages(textValue, this.id);
    
  }
  

}
