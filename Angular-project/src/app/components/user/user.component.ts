import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: User[];
  @Output() userSelected :EventEmitter<User> =  new EventEmitter();


  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);
    this.users = this.users.filter(u => u.id != userId);
  }
  onClick(th:User){
    this.users.forEach(element => {
      element.isSelected =  false;
    });
    th.isSelected =  true ;
    this.userSelected.emit(th);

  }
  saveUser(user:User) {
    if(user)
      this.userService.saveUser(user).subscribe(i=>{
          if(user.id == 0){
            console.log(i)
            this.users.push(new User( i.id,user.email,i.name,user.last_name,user.avatar, i.job ));
          }
      });
      
  }

  ngOnInit() {
    this.userService.getAll().subscribe(u => {
      this.users = u.data;
    });
  }

}
