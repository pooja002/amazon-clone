import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService) { 

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm()
  {
    this.LoginForm = this.fb.group(
      {
        email:[''],
        password:['']
      }
    );
  }

  signIn()
  {
    // console.log(this.LoginForm.value.email,this.LoginForm.value.password);
    this.authService.signIn(this.LoginForm.value.email,this.LoginForm.value.password);
  }

  createAccount()
  {
   this.authService.signUp(this.LoginForm.value.email,this.LoginForm.value.password); 
  }

   

}