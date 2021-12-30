export interface ReviewModelResponse {
    id: number;
    content: string;
    favorite: number;
    createdDate: Date;
    updatedDate?: any;
    createdBy?: any;
    updatedBy?: any;
    touristAttractionId?: number;
    newsId?: number;
}