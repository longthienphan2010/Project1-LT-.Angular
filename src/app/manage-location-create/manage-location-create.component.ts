import { MatDialog } from '@angular/material/dialog';
import { ManageLocationService } from './../services/manage-location.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from "@angular/core";

@Component({
    selector: "app-manage-location-create",
    templateUrl: "./manage-location-create.component.html",
    styleUrls: ["./manage-location-create.component.css"]
})

export class ManageLocationCreateComponent {
    addLocationForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private manageLocationService: ManageLocationService,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.addLocationForm = this.fb.group({
            name: [null],
            content: [null],
            phone: [null],
            address: [null],
            timeOpen: [null],
            timeClose: [null]
        })
    }

    add() {
        const requestObject = {
            name: this.addLocationForm.get('name').value,
            content: this.addLocationForm.get('content').value,
            phone: this.addLocationForm.get('phone').value,
            address: this.addLocationForm.get('address').value,
            timeOpen: {
                days: this.addLocationForm.get('timeOpen').value
            },
            timeClose: {
                days: this.addLocationForm.get('timeClose').value
            },
            createdDate: new Date().toISOString()
        }

        if (requestObject.timeOpen.days) requestObject.timeOpen.days = new Date(requestObject.timeOpen.days);
        if (requestObject.timeClose.days) requestObject.timeClose.days = new Date(requestObject.timeClose.days);
        this.manageLocationService.createTourstAttraction(requestObject).subscribe(console.log);
    }

    cancel() {
        this.dialog.closeAll();
    }
}