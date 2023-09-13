import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  constructor() { }

  user = new User();
  birthDate: any;



  onNoClick() {
    //this.dialogRef.close();

  }

  saveUser() {
    debugger;
    if(isNaN(this.user.birthDate)) {
      this.user.birthDate = this.birthDate.getTime();
    }
    console.log('user is', this.user);
    debugger;
  }

}
