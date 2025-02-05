import { Document } from 'mongoose';

export interface Task extends Document {
    readonly title: string;
    readonly description: string;
    readonly status: string;
}

export interface Response {
    readonly status: number;
    readonly message: string;
}