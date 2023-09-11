import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule, MatIconModule
  ]
})
export class UserModule { }
