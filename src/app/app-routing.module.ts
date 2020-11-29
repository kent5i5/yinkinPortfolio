import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, loggedIn, AngularFireAuthGuard } from '@angular/fire/auth-guard';



const routes: Routes = [
   {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
        canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule),
  },
  {
    path: 'blog-generator',
    loadChildren: () => import('./blog-generator/blog-generator.module').then(mod => mod.BlogGeneratorModule),
    canActivate: [AngularFireAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
