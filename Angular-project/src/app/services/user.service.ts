import { Injectable } from '@angular/core';
import { User ,  UserGetAllResponse } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const userEndPointTmpl: string = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAll() : Observable<UserGetAllResponse> {
    return this.http.get<UserGetAllResponse>(userEndPointTmpl);
  }
  getSingleUser(id: number): Observable<User> {
    return this.http.get<User>(userEndPointTmpl + '/' + id);
  }

  saveUser(user: User) {
    return user.id > 0 ? this.updateUser(user)
      : this.insertUser(user);
  }
  private insertUser(user: User) : Observable<User> {
    return this.http.post<User>(userEndPointTmpl, { name: user.first_name, job: 'defaultJob' })
  }
  private updateUser(user: User): Observable<User> {
    return this.http.put<User>(userEndPointTmpl + '/' + user.id, { name: user.first_name, job: 'defaultJob' })
  }
  deleteUser(id: number) : void {
    this.http.delete(userEndPointTmpl+'/'+id);
  }

}
