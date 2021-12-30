import { Router } from '@angular/router';
import { LocationResponseModel } from './../models/location-response.model';
import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantData$: Observable<LocationResponseModel[]>;
  imageData$: any;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.restaurantData$ = this.locationService.getLocation(1);
    this.imageData$ = this.locationService.getImages();
  }

  getDetail(id) {
    this.router.navigate(["/restaurant-detail", id]);
  }

}
