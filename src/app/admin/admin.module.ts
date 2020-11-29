import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminMsnDetailComponent } from './admin-msn-detail/admin-msn-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AdminComponent,
    AdminMsnDetailComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
  ]
  //providers: [BackendService],
})
export class AdminModule {}
