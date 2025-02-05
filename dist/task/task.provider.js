"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskProviders = void 0;
const task_schema_1 = require("./schemas/task.schema");
exports.taskProviders = [
    {
        provide: 'TASK_MODEL',
        useFactory: (mongoose) => mongoose.model('Task', task_schema_1.TaskSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=task.provider.js.map