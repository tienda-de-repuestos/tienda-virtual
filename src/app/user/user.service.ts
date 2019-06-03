import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userCollection: AngularFirestoreCollection<User>;
  user:Observable<User[]>;
  userDoc:AngularFirestoreDocument<User>;
  
  constructor(private db:AngularFirestore) { 
    this.userCollection = db.collection<User>('users');
    this.user = this.userCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=> {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data};
      }) )
    );

  }

  addUser(nuevoUser:User) {
    console.log(nuevoUser);
    this.userCollection.add(nuevoUser);
  }
}

