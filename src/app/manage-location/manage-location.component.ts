import { ManageLocationEditComponent } from './../manage-location-edit/manage-location-edit.component';
import { ManageLocationCreateComponent } from './../manage-location-create/manage-location-create.component';
import { DataService } from './../services/data.service';
import { ManageLocationDeleteComponent } from './../manage-location-delete/manage-location-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ManageLocationService } from './../services/manage-location.service';
import { LocationService } from './../services/location.service';
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: "app-manage-location",
    styleUrls: ["./manage-location.component.css"],
    templateUrl: "./manage-location.component.html"
})

export class ManageLocationComponent implements OnInit {
    touristAttractionData$: Observable<any[]>
    constructor(
        private manageLocationService: ManageLocationService,
        public dialog: MatDialog,
        private dataService: DataService,
        private _snackBar: MatSnackBar
    ) { }
    ngOnInit(): void {
        this.touristAttractionData$ = this.manageLocationService.getTouristAttraction();
    }

    deleteLocation(item) {
        this.dialog.open(ManageLocationDeleteComponent,
            {
                width: "30%"
            })

        this.dataService.events$.subscribe(data => {
            if (data === "deleted") {
                this.manageLocationService.deleteTouristAttraction(item.id).subscribe(result => {
                    if (result) {
                        this.touristAttractionData$ = this.manageLocationService.getTouristAttraction();
                        this._snackBar.open("Delete success", "close", { duration: 3000 });
                    }
                }, err => {
                    this._snackBar.open(`Delete failed`, "close", { duration: 3000 });
                });
            }
        })
    }

    addLocation() {
        this.dialog.open(ManageLocationCreateComponent,
            {
                width: "40%"
            })
    }

    editLocation(item) {
        this.dialog.open(ManageLocationEditComponent,
            {
                width: "40%",
                data: item
            })
    }
}