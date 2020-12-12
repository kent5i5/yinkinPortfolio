import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';// <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // boostrap support


import { ProductListComponent } from './product-list/product-list.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { environment } from '../environments/environment';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';
import { AuthService } from './account/auth.service';

import { BlogModule } from'./blog/blog.module';
import { BlogComponent } from './blog/blog/blog.component'

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

//import { MarkdownModule } from 'ngx-markdown';
import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopNavbarComponent,
    ChatComponent,
    AccountComponent,
    FooterComponent,
    BodyComponent,
    ResumeComponent,
    ProjectComponent,
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BlogModule,
    
    NgxMdModule.forRoot(),
    //MarkdownModule.forRoot(),
    
    AngularFireModule.initializeApp(environment.firebase, 'yinkin-app'),
	  AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      { path: 'privacy', component: BodyComponent},
      { path: 'account', component: AccountComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'project', component: ProjectComponent },
    ])
  ],
  providers: [AuthService,AngularFireAuthGuard, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
