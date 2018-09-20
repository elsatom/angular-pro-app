import { RegisterService } from './../../core/services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [
    RegisterService
  ]
})
export class UserDetailsComponent implements OnInit {
  users: any = [];
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    // this.users = this.registerService.getUsers().subscribe(data =>
    //   console.log(data)
    // );
    this.users = [1, 2, 3, 4, 5];
  }

}
