import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class RestfulService {

    constructor(private http: HttpClient) { }

    // CREATE
    create<T>(url: string, objToCreate: T | any): Observable<any> {
        return this.http.post(url, objToCreate).pipe(catchError((error) => {
            throw of(error);
        }));
    }

    // READ
    read<T>(url: string, httpParams?: HttpParams): Observable<any | T> {
        if (httpParams) {
            return this.http.get<any | T>(url, { params: httpParams });
        }
        return this.http.get<any | T>(url);
    }

    // UPDATE
    update<T>(url: string, objToUpdate: T | any): Observable<any> {
        return this.http.patch<T>(`${url}`, objToUpdate).pipe(catchError((error) => {
            throw of(error);
        }));
    }

    // UPDATE
    put<T>(url: string, objToUpdate: T | any): Observable<any> {
        return this.http.put<T>(`${url}`, objToUpdate).pipe(catchError((error) => {
            throw of(error);
        }));
    }

    // DELETE
    delete(url: string, id: number): Observable<any> {
        return this.http.delete(`${url}/${id}`).pipe(catchError((error) => {
            throw of(error);
        }));
    }

    // DELETE
    deleteWithBody(url: string, req: any): Observable<any> {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: req
        };
        return this.http.delete(`${url}`, options).pipe(catchError((error) => {
            throw of(error);
        }));
    }
}