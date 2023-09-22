import { Component, inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { collectionData } from '@angular/fire/firestore';
import { Firestore, collection, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  /*item$: Observable<any[]>;
  //firestore: Firestore = inject(Firestore);
  itemCollection;
  db: Firestore;
  app;*/

  constructor() {
    /*this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
    this.itemCollection = collection(this.db, 'users');
    this.item$ = collectionData(this.itemCollection);*/
  }

  /*initializeFirebase() {
    this.app = initializeApp(environment.firebase);
    this.db = getFirestore(this.app);
    this.itemCollection = collection(this.db, 'users');
  }*/

}
