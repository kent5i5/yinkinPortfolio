import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogGeneratorComponent } from './blog-generator/blog-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagListingComponent } from './tag-listing/tag-listing.component';

//import { MarkdownModule } from 'ngx-markdown';
import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogGeneratorComponent,
    TagListingComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NgxMdModule.forRoot(),
    //MarkdownModule.forChild(),
    //AngularFireAuthModule, // this is necessary for additional module to work if auth instant is declare within module
  ]
})
export class BlogModule { }
