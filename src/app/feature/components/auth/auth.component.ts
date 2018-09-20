import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthInputComponent implements OnInit {
    @Input() form: FormGroup;

    constructor() {

    }

    ngOnInit() {

    }


}
