import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Response, Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Response> {
    const createdTask = this.taskModel.create(createTaskDto);
    return {status: 201, message: `Created. id: ${(await createdTask)._id}`};
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Response> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto)
    return {status: 200, message:`Updated. id: ${id}`}
  }

  async remove(id: string): Promise<Response> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id)
    return {status: 200, message:`Deleted. id: ${id}`}
  }
}
