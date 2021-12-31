import { LocationService } from './../services/location.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';


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
    constructor(
        private locationService: LocationService,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(pluck('id')).subscribe(id => {
            if (id) {
                this.locationDetail$ = this.locationService.getDetailLocation(id);
                this.reviewTa$ =  this.locationService.getReviewsTa();
            }
        })
        this.reviewForm = this.fb.group({
            review: [null]
        })
    }

    onSubmit(e) {
        console.log(this.reviewForm.get('review').value);
    }
}