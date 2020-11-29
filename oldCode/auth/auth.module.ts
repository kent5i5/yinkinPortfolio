import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    NgbModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
