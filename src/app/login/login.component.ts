import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })  

  onSubmit(){
    if(this.loginForm.valid) {
      this.http.post('/api/v1/login', this.loginForm.value).subscribe((res) => {
        console.log('----', res)
      })
      console.log(this.loginForm.value);
    }
  }
}
