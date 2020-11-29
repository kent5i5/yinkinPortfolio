import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  numRoom;
  sesseionid;
  currentUser: string;

  image = 'http://yinkin.ziruoinc.com/images/icons8-facebook-24.png';
  twitterImage = 'http://yinkin.ziruoinc.com/images/icons8-twitter-24.png';
  instantGramImage = 'http://yinkin.ziruoinc.com/images/icons8-instagram-24.png';
  linkedin = 'https://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/linkedin-logo24x24.png';

  chatImage = "http://yinkin.ziruoinc.com/images/LIVECHAT.png";

  awsImage = 'http://s3-us-west-2.amazonaws.com/yinkin.ziruoinc.com/images/AWScert.png';

  constructor(
    private modalService: NgbModal,

  ) {}

  ngOnInit() {
    
  }

  openchat() {
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      size: 'sm',
      windowClass: "yinkinChatModal",  
      ariaLabelledBy: "chat",
      beforeDismiss: () => {
        setTimeout(()=>{
            
        },100);
        return true;
      }
    };
    const chatModalRef = this.modalService.open(ChatComponent, ngbModalOptions);
    //chatModalRef.componentInstance.chatRoomNum = this.numRoom;
    //this.maxRoomRef.set(this.numRoom);
    //chatModalRef.componentInstance.registeredUser = this.currentUser;
  
  }

  onNgDestory(){
    
  }
}
