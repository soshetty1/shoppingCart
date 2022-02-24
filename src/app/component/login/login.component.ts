import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router,RouterLink } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
 msg= '';
  private _router: any;

  constructor(private _service: RegistrationService, private router : Router) { }

  ngOnInit() {
  }
loginuser(){
  this._service.loginUserFromRemote(this.user).subscribe(
    data => {
      console.log("response recieved");
    this.router.navigate(['/loginsucess'])
  },

    error =>{
       console.log("exception occured");
       this.msg="bad credentials ,please enter valid email Id and password";
    }   
  )
}
}
