import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogGeneratorComponent } from './blog-generator/blog-generator.component';
import { TagListingComponent } from './tag-listing/tag-listing.component';




const blogRoutes : Routes = [
  {path: '' ,  component: BlogComponent},
  {path: 'detail/:id' , component: BlogDetailComponent},
  {path: 'addBlog', component: BlogGeneratorComponent },
  {path: 'tag/:value' , component: TagListingComponent } 
]

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],

  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {}
