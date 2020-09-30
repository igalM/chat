export interface User {
    _id?: string;
    username: string;
    // avatar: string;
}

export interface Message {
    _id?: string;
    user: User;
    body: string;
    createdAt: number;
    //avatar: string;
}