"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async create(createTaskDto) {
        const createdTask = this.taskModel.create(createTaskDto);
        return { status: 201, message: `Created. id: ${(await createdTask)._id}` };
    }
    async findAll() {
        return this.taskModel.find().exec();
    }
    async findOne(id) {
        return this.taskModel.findById(id).exec();
    }
    async update(id, updateTaskDto) {
        const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto);
        return { status: 200, message: `Updated. id: ${id}` };
    }
    async remove(id) {
        const deletedTask = await this.taskModel.findByIdAndDelete(id);
        return { status: 200, message: `Deleted. id: ${id}` };
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TASK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TaskService);
//# sourceMappingURL=task.service.js.map