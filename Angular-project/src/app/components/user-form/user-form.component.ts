import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userComp : UserComponent) { }
  
  user: User =  new User(0,'','','','','') ;

  onSubmit(){
    this.userComp.saveUser(this.user);
    this.reInitUser();
  }

  clear(){
    this.reInitUser();
  }

  reInitUser(){
    this.user =new User(0,'','','','','');
  }

  ngOnInit() {
    this.userComp.userSelected.subscribe(u=>{
      this.user =  u;
    });
  }

}
