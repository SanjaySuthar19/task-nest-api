import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Response, Task } from './interfaces/task.interface';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Response>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Task> & Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Response>;
    remove(id: string): Promise<Response>;
}
