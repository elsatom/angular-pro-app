import { Observable } from 'rxjs';
import { RegisterService } from './../../core/services/register.service';
import { UserInputComponent } from './../components/user/user.component';
import { AuthInputComponent } from './../components/auth/auth.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    RegisterService
  ]
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    user: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    }),
    auth: this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  });

  constructor(private registerService: RegisterService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.registerService.addUser(this.form.value).subscribe(data =>
      this.router.navigate(['/dashboard']));
  }

}
