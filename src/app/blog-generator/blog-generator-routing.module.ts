import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { canActivate } from '@angular/fire/auth-guard';
import { BlogGenerateMenuComponent } from './blog-generate-menu/blog-generate-menu.component';

const blogGenRoute : Routes = [
  {path:'' , component: BlogGenerateMenuComponent},
  {path:'newBlog' , component: NewBlogComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(blogGenRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogGeneratorRoutingModule { }
