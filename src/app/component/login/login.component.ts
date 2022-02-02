import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();

  constructor(private _service: RegistrationService) { }

  ngOnInit(): void {
  }
loginuser(){
  this._service.loginUserFromRemote(this.user).subscribe(
    data => console.log("response recieved"),
    error => console.log("exception occured")
  )
}
}
