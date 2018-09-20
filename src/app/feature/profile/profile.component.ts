import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from './../../core/services/register.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [RegisterService]
})
export class ProfileComponent implements OnInit {
  user: any = {};

  editMode: boolean;

  id: number;

  form = this.fb.group({
    user: this.fb.group({
      firstName: '',
      lastName: '',
      age: ''
    }),
    auth: this.fb.group({
      email: '',
      password: ''
    })
  });
  constructor(private registerService: RegisterService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.registerService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.form = this.fb.group({
        user: this.fb.group({
          firstName: this.user.user.firstName,
          lastName: this.user.user.lastName,
          age: this.user.user.age
        }),
        auth: this.fb.group({
          email: this.user.auth.email,
          password: this.user.auth.password
        })
      });
      //   this.form.get('auth').valueChanges.subscribe(value => {
      //   console.log(value);    // this works, when the value changes - like change or ngmodelchange
      // });
    });
  }

  editModeOn() {
    this.editMode = true;
  }

  onSubmit() {
    this.registerService.updateUserById(this.form.value, this.id).subscribe(data => {
      console.log(this.form);

    });
  }



}
