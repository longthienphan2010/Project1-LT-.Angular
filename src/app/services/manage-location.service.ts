import { Injectable } from "@angular/core";
import { RestfulService } from "./restful.service";

@Injectable({
    providedIn: "root"
})

export class ManageLocationService {
    url: string = "https://localhost:5001"
    constructor(private restfulService: RestfulService) { }

    getTouristAttraction() {
        const touristUrl = `${this.url}/api/TouristAttraction`;
        return this.restfulService.read(touristUrl);
    }

    deleteTouristAttraction(id) {
        const touristUrlId = `${this.url}/api/TouristAttraction`;
        return this.restfulService.delete(touristUrlId, id);
    }

    createTourstAttraction(res: any) {
        const touristUrl = `${this.url}/api/TouristAttraction`;
        return this.restfulService.create(touristUrl, res);
    }
}