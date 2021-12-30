import { CommunityService } from './../services/community.service';
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "app-news-detail",
    templateUrl: "./news-detail.component.html",
    styleUrls: ["./news-detail.component.css"]
})

export class NewsDetailComponent {
    id: number;
    communityDetail$: Observable<any>;
    constructor(
        private communityService: CommunityService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(pluck('id')).subscribe(id => {
            if (id) {
                this.communityDetail$ = this.communityService.getCommunicationDetail(id);
            }
        })
    }
}