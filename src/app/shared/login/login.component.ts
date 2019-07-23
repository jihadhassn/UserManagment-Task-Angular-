import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/feature/users/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: "hhdhdhdhh"
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
      // Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]
    });
    console.log(this.loginForm)
  }
  onSubmit() {
    // console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log('form is valid')
      if (this.userService.getByEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['password']) == true) {
        console.log("success")
        this.router.navigate(['/users']);
      }
      else {
        console.log('faillll')
        alert('Your Email or Password Is Wrong')
        this.router.navigate(['']);
      }
    }
    else {
      alert('Your Email and Password Is Required')
      this.router.navigate(['']);

    }
  }

}
