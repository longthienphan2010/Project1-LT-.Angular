export interface NewsModelResponse {
    id: number;
    views: number;
    title: string;
    status: number;
    content: string;
    createdDate: Date;
    updatedDate?: any;
    createdBy?: any;
    updatedBy?: any;
}