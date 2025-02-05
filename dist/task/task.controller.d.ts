import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './interfaces/task.interface';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<import("./interfaces/task.interface").Response>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Task> & Task & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./interfaces/task.interface").Response>;
    remove(id: string): Promise<import("./interfaces/task.interface").Response>;
}
