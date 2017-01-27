import { Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { ContactService } from './contact.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './contact.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    title = "Mes users"
    people = []
    personDetail = ''

  constructor(private service:ContactService){
      this.service.getAllContacts().subscribe(contacts => {
      this.people = contacts;
    })
  }

  getAllContacts() {
    this.service.getAllContacts().subscribe(contacts => {
      this.people = contacts;
    })
  }

  getContact(username:String) {
    this.service.getContact(username).subscribe(contact => {
      this.personDetail = contact;
    })
  }

  addContact(user:User) {
    this.service.addContact(user).subscribe(contacts => {
      this.people = contacts
    })
  }

  ngOnInit() {
    this.myForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

  }
}

