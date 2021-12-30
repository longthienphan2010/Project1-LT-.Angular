export interface LocationResponseModel {
    id: number;
    name: string;
    content: string;
    status: number;
    phone: string;
    address: string;
    timeOpen: string;
    timeClose: string;
    createdDate?: any;
    updatedDate?: any;
    createdBy?: any;
    updatedBy?: any;
    typeServiceId: number;
    wardId: number;
}

export interface CardModel {
    name: string;
    content: string;
    status: number;
    address: string;
    timeOpen: string;
    timeClose: string;
    image: any;
}