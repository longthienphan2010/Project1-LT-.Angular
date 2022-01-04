import { Injectable } from "@angular/core";
import { RestfulService } from "./restful.service";

@Injectable({
    providedIn: "root"
})

export class UserService {
    url: string = 'https://localhost:5001';
    constructor(private restfulService: RestfulService) { }

    registerUser(requestObject: any) {
        const registerUrl = `${this.url}/api/Users/register`;
        return this.restfulService.create(registerUrl, requestObject);
    }

    loginUser(requestObject: any) {
        const loginUrl = `${this.url}/api/Users/authenticate`;
        return this.restfulService.create(loginUrl, requestObject);
    }
}