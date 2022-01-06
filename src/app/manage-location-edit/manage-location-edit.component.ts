import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject } from "@angular/core";

@Component({
    selector: "app-manage-location-edit",
    templateUrl: "./manage-location-edit.component.html",
    styleUrls: ["./manage-location-edit.component.css"]
})

export class ManageLocationEditComponent {
    editLocationForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialog: MatDialog,
    ) { }
    ngOnInt() {
        console.log(this.data);
        this.editLocationForm = this.fb.group({
            name: [null],
            content: [null],
            phone: [null],
            address: [null],
            timeOpen: [null],
            timeClose: [null]
        })
    }

    edit() {

    }

    cancel() {
        this.dialog.closeAll();
    }
}