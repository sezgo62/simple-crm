import { Component, inject } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, collectionData, doc } from '@angular/fire/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {  setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.class';
import { FirebaseService } from '../firebase.service';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  constructor(public service: FirebaseService) {
    this.item$ = this.itemCollection;
    //this.service.initializeFirebase();
  }

  user = new User();
  birthDate: any;
  progressBar = false;
  //db;
  item$: Observable<any[]>;
  //firestore: Firestore = inject(Firestore);
  itemCollection;

  onNoClick() {
    //this.dialogRef.close();
  }

  async saveUser() {
    this.progressBar = true;

    debugger;
    if (isNaN(this.user.birthDate)) {
      this.user.birthDate = this.birthDate.getTime();
    }

  

    const app = initializeApp(environment.firebase);


    this.service.db = getFirestore(this.service.app);

    //setDoc(addDoc(this.itemCollection), this.user);//Mit dieser Zeile fügen wir dem collection etwas neues hinzu

    await addDoc(collection(this.service.db, 'users'), 
    this.user.toJson());
    console.log(this.service.db);
    
    
  }
}
