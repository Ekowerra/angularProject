import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export interface User {
    username: string;
    password:string;
}

@Injectable()
export class ContactService {

  constructor(private http:Http){
      this.http.get('http://127.0.0.1:8080/contacts').map(res=>res.json());
  }

  getAllContacts(){
   return this.http.get('http://127.0.0.1:8080/contacts').map(res=>res.json());
  }

  getContact(username:String) {
    var url = 'http://127.0.0.1:8080/contacts/?username=' + username;
   return this.http.get(url).map(res=>res.json());
  }

  deleteContact(username:String) {
    var url = 'http://127.0.0.1:8080/contacts/?username=' + username;
   return this.http.delete(url).map(res=>res.json());
  }

  addContact(user:User) {
    var url = 'http://127.0.0.1:8080/contacts';
    var body = '{"username": "' + user.username + '", "password": "'+ user.password +'" }';
    this.http.post(url,body).subscribe(c => {});
    return this.getAllContacts();
  }
}
