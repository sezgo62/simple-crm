import { query } from '@angular/fire/firestore';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData, onSnapshot, addDoc, DocumentReference, updateDoc, deleteDoc, where, limit } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);


allUsers: User[] = [];
unsubUsers;

  constructor() {
    this.unsubUsers = this.subNotesList();
  }

  subNotesList() {
  const q = query(this.getRefUsers());
  return onSnapshot(q, (list) => { //Die onSnapshot-Methode aus dem Firebase Firestore SDK ist dazu da, um Änderungen in einer Firestore-Sammlung zu überwachen und eine Funktion auszuführen, wenn Änderungen auftreten.
    //this.normalNotes = [];
    list.forEach(element => {
console.log('Our Users', list);

      //this.normalNotes.push(this.setNodeObject(element.data(), element.id));
    });
  });
}

getRefUsers() {
  return collection(this.firestore, 'users');
}


/*getRef(collId: string) {
  return collection(this.firestore, collId);
}*/

async addUser(collId: string, item: any) {
  await addDoc(this.getRefUsers(), item).catch( 
    (err) => { console.log(err) }
  ).then(
    (docRef) => { console.log('Document writen with ID: ', docRef);
     })
}

}
