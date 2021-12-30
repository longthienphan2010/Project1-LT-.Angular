import { Router } from '@angular/router';
import { LocationResponseModel } from './../models/location-response.model';
import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tea',
  templateUrl: './tea.component.html',
  styleUrls: ['./tea.component.css']
})
export class TeaComponent implements OnInit {
  teaData$: Observable<LocationResponseModel[]>;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.teaData$ = this.locationService.getLocation(4);
  }

  getDetail(id) {
    this.router.navigate(["/tea-detail", id]);
  }
}
