import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { firestore } from 'firebase';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

export interface  Blog {
  title: string;
  createdDate: firestore.Timestamp;
  content: string[];
  author: string;
  thumbnail: string; 
  pictures: string[];
  tags: string[];

}

export interface BlogId extends Blog{ id: string; }