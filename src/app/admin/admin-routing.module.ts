import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminMsnDetailComponent } from './admin-msn-detail/admin-msn-detail.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, canActivate, isNotAnonymous, loggedIn, customClaims} from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

const adminOnly = hasCustomClaim('admin');
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);
// const redirectLoggedInToItems = redirectLoggedInTo(['admin/:id']);

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
      ...canActivate(isNotAnonymous)
    //canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: '',
    //     //canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'room/:id', component: AdminMsnDetailComponent },
    //     ]
    //   }
    // ]
  },
  { path: 'accounts/:accountId', component: AdminMsnDetailComponent },
  { path: 'room/:id', component: AdminMsnDetailComponent , 
   ...canActivate(isNotAnonymous)
  },
  { path: ':id', component: DashboardComponent,
   //...canActivate(belongsToAccount)
    },
/*
	{ path: '/blog-generator',  redirectTo: ''
   //...canActivate(belongsToAccount)
    },
*/

];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
