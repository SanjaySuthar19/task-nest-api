import { Mongoose } from 'mongoose';
export declare const taskProviders: {
    provide: string;
    useFactory: (mongoose: Mongoose) => import("mongoose").Model<{
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    }> & {
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    }>> & import("mongoose").FlatRecord<{
        title?: string | null | undefined;
        description?: string | null | undefined;
        status?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
