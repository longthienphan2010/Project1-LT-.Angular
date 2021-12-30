import { Router } from '@angular/router';
import { CommunityService } from './../services/community.service';
import { NewsModelResponse } from './../models/news-response.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsData$: Observable<NewsModelResponse[]>;
  reviewData$: Observable<any>;
  constructor(
    private communityService: CommunityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsData$ = this.communityService.getCommunication();
    this.reviewData$ = this.communityService.getReviews();
  }

  getDetail(id) {
    this.router.navigate(["/news-detail", id]);
  }

}
