import { DataService } from './../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    requestObject: {
        username: string,
        password: string
    }
    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private _snackBar: MatSnackBar,
        public dialog: MatDialog,
        private dataService: DataService
    ) { }
    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: [null],
            password: [null]
        })
    }

    login() {
        this.requestObject = this.loginForm.value;
        this.userService.loginUser(this.requestObject).subscribe(result => {
            if (result) {
                this._snackBar.open("Login success", "close", { duration: 3000 });
                this.dialog.closeAll();
                localStorage.setItem("JWT_TOKEN_PROJECT", result.token);
                localStorage.setItem("username_project", result.username);
                this.dataService.newEvent("login");
            }
        })
    }

}