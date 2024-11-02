import { Task } from './entity'
import { TaskSchema } from './schema'

export namespace TaskService {
  export const create = async (input: TaskSchema.Types.CreateTaskInput) => {
    const res = await Task.create({
      name: input.name,
      date: input.date,
    }).go()
    return res.data
  }

  export const patch = async (input: TaskSchema.Types.UpdateTaskInput) => {
    const res = await Task.patch({
      id: input.id,
    }).set(input.attributes).go()
    return res.data
  }

  export const remove = async (input: TaskSchema.Types.DeleteTaskInput) => {
    const res = await Task.delete({
      id: input.id,
    }).go()
    return res.data
  }

  export const get = async (input: TaskSchema.Types.GetTaskInput) => {
    const res = await Task.get({
      id: input.id,
    }).go()
    return res.data
  }
}
