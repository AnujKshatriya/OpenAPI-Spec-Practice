import { title } from "process";
import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">

export class TodoService {
    public get(todoId : string) : Todo{
        return {
            id : todoId,
            title : "mocked todo",
            description : "mocked desc",
            done : false
        }
    }

    public create(TodoCreationParams : TodoCreationParams) {
        return{
        id : "1",
        title : "mocked todo",
        description : "mocked desc",
        done : false
        }
    }
}