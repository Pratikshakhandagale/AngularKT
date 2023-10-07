import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }


  getUserList()
  {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUserProfile(id: number)
  {
    return this.http.get('https://reqres.in/api/users/' + id);
  }

  postUser(param: any)
  {
   return this.http.post('https://reqres.in/api/users', param);
  }

  updateUser(param: any)
  {
   return this.http.put('https://reqres.in/api/users/2', param);
  }

  deleteUser(id: number)
  {
   return this.http.delete('https://reqres.in/api/users/' + id);
  }


}
