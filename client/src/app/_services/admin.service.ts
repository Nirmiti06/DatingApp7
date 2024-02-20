import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.apiUrl;
  rolesString : String = ''

  constructor(private http: HttpClient) { }

  getUsersWithRoles(){
    return this.http.get<User[]>(this.baseUrl + 'admin/users-with-roles');
  }

  updateUserRoles(username: string, roles: any) {
      return this.http.post<string[]>(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + this.rolesString.slice(0, -1), {});      
  }

  roleStringFun(roles:any){
    this.rolesString = ''
    roles.forEach((element:any) => {
      this.rolesString += `${element},`;
    }); }
}
