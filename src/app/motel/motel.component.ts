import { Router } from '@angular/router';
import { LocationService } from './../services/location.service';
import { LocationResponseModel } from './../models/location-response.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-motel',
  templateUrl: './motel.component.html',
  styleUrls: ['./motel.component.css']
})
export class MotelComponent implements OnInit {
  motelData$: Observable<LocationResponseModel[]>;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.motelData$ = this.locationService.getLocation(7);
  }

  getDetail(id) {
    this.router.navigate(["/motel-detail", id]);
  }
}
