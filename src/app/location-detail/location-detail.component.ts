import { LocationService } from './../services/location.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: "app-location-detail",
    templateUrl: "./location-detail.component.html",
    styleUrls: ["./location-detail.component.css"]
})

export class LocationDetailComponent implements OnInit {
    id: number;
    locationDetail$: Observable<any>;
    reviewForm: FormGroup;
    reviewTa$: Observable<any>;
    isEdit: boolean = false;
    isDelete: boolean = false;
    isCreate: boolean = true;
    requestObject: {
        id?: number,
        content: string,
        favorite: number,
        createdDate: string,
        touristAttractionId?: number,
    }
    constructor(
        private locationService: LocationService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(pluck('id')).subscribe(id => {
            if (id) {
                this.id = id;
                this.locationDetail$ = this.locationService.getDetailLocation(id);
                this.reviewTa$ = this.locationService.getReviewsTa();
            }
        });
        this.reviewForm = this.fb.group({
            review: [null]
        });
    }

    onSubmit(e) {
        const id = this.id;
        const content = this.reviewForm.get('review').value;
        if (!content) {
            this._snackBar.open("Please review", "close", { duration: 3000 });
            return
        }

        if (this.isCreate) {
            const itemObject = {
                content: this.reviewForm.get('review').value,
                favorite: 5,
                createdDate: new Date().toISOString(),
                touristAttractionId: id
            };
            const requestObject = this.mapRequest(itemObject);
            this.locationService.postReviewTa(requestObject).subscribe(result => {
                if (result) {
                    this.reviewForm.get('review').setValue('');
                    this._snackBar.open("Post success", "close", { duration: 3000 });
                    this.getState();
                    this.reviewTa$ = this.locationService.getReviewsTa();
                }
            });
        } else if (this.isEdit) {
            this.requestObject.content = this.reviewForm.get('review').value;
            this.locationService.editReviewTa(this.requestObject).subscribe(result => {
                if (result) {
                    this.reviewForm.get('review').setValue('');
                    this._snackBar.open("Update success", "close", { duration: 3000 });
                    this.getState();
                    this.reviewTa$ = this.locationService.getReviewsTa();
                }
            })
        }
    }


    editReview(item) {
        const reviewSection = document.querySelector(".main-content");
        reviewSection.scrollIntoView();
        this.reviewForm.get('review').setValue(item.content);
        const itemObject = {
            id: item.id,
            favorite: item.favorite,
            createdDate: new Date().toISOString(),
            touristAttractionId: this.id
        };
        this.requestObject = this.mapRequest(itemObject);
        this.getState('edit');
    }

    deleteReview(item) {
        this.getState('delete');
        this.locationService.deleteReviewTa(item.id).subscribe(result => {
            if (result) {
                this.reviewForm.get('review').setValue('');
                this._snackBar.open("Delete success", "close", { duration: 3000 });
                this.getState();
                this.reviewTa$ = this.locationService.getReviewsTa();
            }
        })
    }

    mapRequest(item) {
        return {
            id: item.id,
            content: item.content,
            favorite: item.favorite,
            createdDate: item.createdDate,
            touristAttractionId: item.touristAttractionId
        }
    }

    getState(state: string = 'create') {
        switch (state) {
            case 'create':
                this.isCreate = true;
                this.isDelete = false;
                this.isEdit = false;
                break;
            case 'edit':
                this.isCreate = false;
                this.isDelete = false;
                this.isEdit = true;
                break;
            case 'delete':
                this.isCreate = false;
                this.isDelete = true;
                this.isEdit = false;
                break;
        }
    }
}