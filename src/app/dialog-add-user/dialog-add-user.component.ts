import { Component, inject } from '@angular/core';
//import { Firestore, collectionData } from '@angular/fire/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
//import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
//import { collection } from '@angular/fire/firestore'; // Importieren Sie collection aus '@angular/fire/firestore'
//import { Firestore, collectionData, collection } from '@angular/fire/firestore';



@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  constructor() {
     this.itemCollection = collection(this.firestore, 'users');
    this.item$ = collectionData(this.itemCollection);
  }

  user = new User();
  birthDate: any;
  itemCollection;

  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);


  onNoClick() {
    //this.dialogRef.close();
  }

  saveUser() {
    debugger;
    if (isNaN(this.user.birthDate)) {
      this.user.birthDate = this.birthDate.getTime();
    }

    this.itemCollection.add(this.user)
    .then((result: any) => {
      console.log('hallo', result);
    });

  }

}
