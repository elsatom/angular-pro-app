import { RegisterComponent } from './../../register/register.component';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserInputComponent implements OnInit {
    @Input()
    form: FormGroup;

    constructor() {

    }

    ngOnInit() {

    }

}
