import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    requestObject: {
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        password: string,
        createdDate?: string
    }
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            userName: [null],
            password: [null],
            email: [null],
            firstName: [null],
            lastName: [null]
        })
    }

    signIn() {
        this.requestObject = this.registerForm.value;
        this.requestObject.createdDate = new Date().toISOString();
        this.userService.registerUser(this.requestObject).subscribe((result) => {
            if (result) {
                this._snackBar.open("Register success", "close", { duration: 3000 });
                this.dialog.closeAll();
            }
        },
            (error) => {
                this._snackBar.open("Register failed", "close", { duration: 3000 });
            }
        )
    }
}