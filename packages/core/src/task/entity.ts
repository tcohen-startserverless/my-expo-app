import { Entity } from "electrodb"
import { Config } from "../../dynamo"
import { nanoid } from "nanoid"

export const Task = new Entity({
  model: {
    entity: "task",
    version: "1",
    service: "task-service",
  },
  attributes: {
    id: {
      type: "string",
      required: true,
      readOnly: true,
      default : () => nanoid(),
    },
    name: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
  },
  indexes: {
    primary: {
      pk: {
        field: "pk",
        composite: ["id"],
      },
      sk: {
        field: "sk",
        composite: [],
      },
    },
  },
}, {
  client: Config.client,
  table: Config.table,
})

export type TaskEntityType = typeof Task
