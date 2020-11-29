import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { Observable, of } from 'rxjs';

// export const BLOG: Blog[] = [
//   { title: "hello world", createdDate: "07/06/2019 ", content: "this is ying", author: "ying", thumbnail: "ying.png",pictures:['a', 'b'] ,tags: ['a','b']},
//   { title: "good night", createdDate: "08/26/2019", content: "this is ying", author: "ying", thumbnail: "ying.png",pictures:['a', 'b'] ,tags: ['a','b']},
//   // { title: "done", createdDate: "09/22/2019", content: "this is ying", author: "ying", thumbnail: "ying.png", pictures:['a', 'b'] ,tags: ['a','b']},

// ];

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //blogRef firestoreObject
  

  constructor(
    
  ) { }

  // retrieveBlogByDate(){
  // }

  // retrieveBlogByAuthor(): Observable<Blog[]>{
  //   return of(BLOG);
  // }

  // retrieveBlogByTags(){
    
  // } 


  // getBlogTitle() {}

  // getBlogCreatedDate(){}
  
  // getBlogContent(){}
  
  // getBLogAuthor(){}

  // getBlogThumbnail(){}
  
  // getBlogPictures(){
  // }

  // getBlogTags() {

  // }
}


/*
  Firestore
  -----------

  Data structure;
  blog:{
    title: string
    createdDate: string
    content: string
    author: string
    thumbnail: string
    pictures :{
      pic1
      pic2
      pic3

    }
    tags:{
      tag1
      tag2
      tag3

    }
  }

*/
