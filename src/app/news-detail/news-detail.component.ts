import { FormBuilder, FormGroup } from '@angular/forms';
import { CommunityService } from './../services/community.service';
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: "app-news-detail",
    templateUrl: "./news-detail.component.html",
    styleUrls: ["./news-detail.component.css"]
})

export class NewsDetailComponent {
    id: number;
    communityDetail$: Observable<any>;
    commentForm: FormGroup;
    reviewNews$: Observable<any[]>;
    isEdit: boolean = false;
    isDelete: boolean = false;
    isCreate: boolean = true;
    requestObject: {
        id?: number,
        content: string,
        favorite: number,
        createdDate: string,
        newsId?: number,
    }
    constructor(
        private communityService: CommunityService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
        this.route.params.pipe(pluck('id')).subscribe(id => {
            if (id) {
                this.id = id;
                this.communityDetail$ = this.communityService.getCommunicationDetail(id);
                this.reviewNews$ = this.communityService.getReviews();
            }
        });

        this.commentForm = this.fb.group({
            comment: [null]
        })
    }

    onSubmit(e) {
        const id = this.id;
        const content = this.commentForm.get('comment').value;
        if (!content) {
            this._snackBar.open("Please comment", "close", { duration: 3000 });
            return
        }

        if (this.isCreate) {
            const itemObject = {
                content: this.commentForm.get('comment').value,
                favorite: 5,
                createdDate: new Date().toISOString(),
                newsId: id
            };
            const requestObject = this.mapRequest(itemObject);
            this.communityService.postReview(requestObject).subscribe(result => {
                if (result) {
                    this.commentForm.get('comment').setValue('');
                    this._snackBar.open("Post success", "close", { duration: 3000 });
                    this.getState();
                    this.reviewNews$ = this.communityService.getReviews();
                }
            });
        } else if (this.isEdit) {
            this.requestObject.content = this.commentForm.get('comment').value;
            this.communityService.editReview(this.requestObject).subscribe(result => {
                if (result) {
                    this.commentForm.get('comment').setValue('');
                    this._snackBar.open("Update success", "close", { duration: 3000 });
                    this.getState();
                    this.reviewNews$ = this.communityService.getReviews();
                }
            })
        }
    }

    editReview(item) {
        const reviewSection = document.querySelector(".main-content");
        reviewSection.scrollIntoView();
        this.commentForm.get('comment').setValue(item.content);
        const itemObject = {
            id: item.id,
            favorite: item.favorite,
            createdDate: new Date().toISOString(),
            newsId: this.id
        };
        this.requestObject = this.mapRequest(itemObject);
        this.getState('edit');
    }

    deleteReview(item) {
        this.getState('delete');
        this.communityService.deleteReview(item.id).subscribe(result => {
            if (result) {
                this.commentForm.get('comment').setValue('');
                this._snackBar.open("Delete success", "close", { duration: 3000 });
                this.getState();
                this.reviewNews$ = this.communityService.getReviews();
            }
        })
    }

    mapRequest(item) {
        return {
            id: item.id,
            content: item.content,
            favorite: item.favorite,
            createdDate: item.createdDate,
            newsId: item.newsId
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