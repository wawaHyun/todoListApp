export interface IPetType {
    id?: number;
    name?: string;
    description?: string;
    image?: string;
    lottie?: string;
    requiredLevel?: number;
}

export interface IPet {
    id?: number;
    name?: string,
    level?: number;
    exp?: number;
    createdAt?: string;
    
    userId?: number;
    petTypeId?: number;
}