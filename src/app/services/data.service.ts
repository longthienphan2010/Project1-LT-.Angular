import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class DataService implements OnDestroy {
    private messageSource = new BehaviorSubject('');
    private subject = new Subject<any>();
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: any) {
        this.messageSource.next(message);
    }

    /** function clear Event Button Update Status */
    clearMessages() {
        // clear event button update status ticket or order
        this.messageSource.next('');
    }

    newEvent(event) {
        this.subject.next(event);
    }
    clearEvent() {
        this.subject.next(null);
    }
    get events$() {
        return this.subject.asObservable();
    }
    ngOnDestroy(): void {
        this.subject.unsubscribe();
        this.messageSource.unsubscribe();
    }
}
