import * as v from 'valibot'

export module TaskSchema {
  export const CreateTaskInput = v.object({
    id: v.optional(v.string()),
    name: v.string("Missing name"),
    date: v.string("Missing date"),
  })

  export const UpdateTaskInput = v.object({
    id: v.string("Missing id"),
    attributes: v.partial(v.omit(CreateTaskInput, ["id"]))
  })

  export const DeleteTaskInput = v.object({
    id: v.string("Missing id"),
  })

  export const GetTaskInput = v.object({
    id: v.string("Missing id"),
  })

  export type CreateTaskInput = v.InferInput<typeof CreateTaskInput>
  export type UpdateTaskInput = v.InferInput<typeof UpdateTaskInput>
  export type DeleteTaskInput = v.InferInput<typeof DeleteTaskInput>
  export type GetTaskInput = v.InferInput<typeof GetTaskInput>
}
