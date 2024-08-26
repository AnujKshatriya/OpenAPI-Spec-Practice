"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked desc",
            done: false
        };
    }
    create(TodoCreationParams) {
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked desc",
            done: false
        };
    }
}
exports.TodoService = TodoService;
