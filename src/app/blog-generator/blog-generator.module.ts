import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogGeneratorRoutingModule } from './blog-generator-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogGenerateMenuComponent } from './blog-generate-menu/blog-generate-menu.component';



@NgModule({
  declarations: [NewBlogComponent, BlogGenerateMenuComponent],
  imports: [
    CommonModule,
    NgbModule,
    BlogGeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class BlogGeneratorModule { }
