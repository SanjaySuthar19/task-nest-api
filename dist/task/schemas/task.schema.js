"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
});
//# sourceMappingURL=task.schema.js.map