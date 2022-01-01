import { LocationResponseModel, CardModel } from './../models/location-response.model';
import { TypeServiceModel } from './../models/type-service.model';
import { Injectable } from "@angular/core";
import { concat, Observable } from "rxjs";
import { RestfulService } from "./restful.service";
import { filter } from 'rxjs-compat/operator/filter';
import { map, mapTo, switchMap } from 'rxjs/operators';



@Injectable({
    providedIn: "root"
})

export class LocationService {
    url: string = 'https://localhost:5001';
    restaurantStore: LocationResponseModel[];
    imageUrl: string;
    locationUrl: string;
    reviewTaUrl: string;
    constructor(private restfulService: RestfulService) { }

    getLocation(type: number) {
        this.locationUrl = `${this.url}/api/TouristAttraction`;
        return this.restfulService.read(this.locationUrl).pipe(
            map(items => {
                return items.filter((item: LocationResponseModel) => item.typeServiceId === type)
            })
        )
    }

    getDetailLocation(id: number) {
        this.locationUrl = `${this.url}/api/TouristAttraction/${id}`;
        return this.restfulService.read(this.locationUrl);
    }

    getImages() {
        this.imageUrl = `${this.url}/api/Image`;
        return this.restfulService.read(this.imageUrl);
    }

    getReviewsTa() {
        this.reviewTaUrl = `${this.url}/api/Review`;
        return this.restfulService.read(this.reviewTaUrl).pipe(
            map(items => {
                return items.filter((item) => !!item.touristAttractionId)
            })
        );
    }

    postReviewTa(reviewRequest) {
        this.reviewTaUrl = `${this.url}/api/Review`;
        return this.restfulService.create(this.reviewTaUrl, reviewRequest);
    }

    editReviewTa(reviewRequest) {
        this.reviewTaUrl = `${this.url}/api/Review`;
        return this.restfulService.put(this.reviewTaUrl, reviewRequest);
    }

    deleteReviewTa(id) {
        this.reviewTaUrl = `${this.url}/api/Review`;
        return this.restfulService.delete(this.reviewTaUrl, id);
    }
}