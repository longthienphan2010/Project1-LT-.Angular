import { DataService } from './../services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from "@angular/core";

@Component({
    selector: "app-manage-location-delete",
    templateUrl: "./manage-location-delete.component.html",
    styleUrls: ["./manage-location-delete.component.css"]
})

export class ManageLocationDeleteComponent {

    constructor(
        private dialogRef: MatDialogRef<ManageLocationDeleteComponent>,
        private dataService: DataService
    ) { }
    closeDailog() {
        this.dialogRef.close();
    }

    oke() {
        this.dataService.newEvent("deleted");
        this.dialogRef.close();
    }
}