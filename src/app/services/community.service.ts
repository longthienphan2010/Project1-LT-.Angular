import { NewsModelResponse } from './../models/news-response.model';
import { LocationResponseModel } from './../models/location-response.model';
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { RestfulService } from "./restful.service";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class CommunityService {
    url: string = 'https://localhost:5001';
    imageUrl: string;
    newsUrl: string;
    reviewsUrl: string;
    constructor(private restfulService: RestfulService) { }

    getCommunication(): Observable<NewsModelResponse[]> {
        this.newsUrl = `${this.url}/api/News`;
        return this.restfulService.read(this.newsUrl)
    }

    getCommunicationDetail(id: number): Observable<NewsModelResponse[]> {
        this.newsUrl = `${this.url}/api/News/${id}`;
        return this.restfulService.read(this.newsUrl)
    }

    getImages(): Observable<any[]> {
        this.imageUrl = `${this.url}/api/Image`;
        return this.restfulService.read(this.imageUrl);
    }

    getReviews(): Observable<any[]> {
        this.reviewsUrl = `${this.url}/api/Review`;
        return this.restfulService.read(this.reviewsUrl).pipe(
            map(items => {
                return items.filter((item) => !!item.newsId)
            })
        );
    }

    postReview(reviewRequest) {
        this.reviewsUrl = `${this.url}/api/Review`;
        return this.restfulService.create(this.reviewsUrl, reviewRequest);
    }

    editReview(reviewRequest) {
        this.reviewsUrl = `${this.url}/api/Review`;
        return this.restfulService.put(this.reviewsUrl, reviewRequest);
    }

    deleteReview(id) {
        this.reviewsUrl = `${this.url}/api/Review`;
        return this.restfulService.delete(this.reviewsUrl, id);
    }
}