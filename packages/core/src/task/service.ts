import { Task } from './entity'
import { TaskSchema } from './schema'

export module TaskService {
  export const create = async (input: TaskSchema.CreateTaskInput) => {
    const res = await Task.create(input).go()
    return res.data
  }

  export const patch = async (input: TaskSchema.UpdateTaskInput) => {
    const res = await Task.patch({id: input.id}).set(input.attributes).go({"response": "all_new"})
    return res.data
  }

  export const remove = async (input: TaskSchema.DeleteTaskInput) => {
    const res = await Task.delete(input).go()
    return res.data
  }

  export const get = async (input: TaskSchema.GetTaskInput) => {
    const res = await Task.get(input).go()
    return res.data
  }
}
