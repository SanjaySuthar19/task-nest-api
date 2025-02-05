import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null | undefined;
    description?: string | null | undefined;
    status?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string | null | undefined;
    description?: string | null | undefined;
    status?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    title?: string | null | undefined;
    description?: string | null | undefined;
    status?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
