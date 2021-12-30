import { Router } from '@angular/router';
import { LocationResponseModel } from './../models/location-response.model';
import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotelData$: Observable<LocationResponseModel[]>;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hotelData$ = this.locationService.getLocation(6);
  }

  getDetail(id) {
    this.router.navigate(["/hotel-detail", id]);
  }

}
