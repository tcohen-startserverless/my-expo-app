import { nanoid } from "nanoid";
import { Entity } from "electrodb";
import { Config } from "../../dynamo";

export const Task = new Entity({
  model: {
    entity: "Task",
    service: "app",
    version: "1",
  },
  attributes: {
    id: {
      required: true,
      type: "string",
      default: () => nanoid(),
    },
    name: {
      required: true,
      type: "string",
    },
    date: {
      required: true,
      type: "string",
    },
    complete: {
      required: true,
      type: "boolean",
      default: () => false,
    }
  },
  indexes: {
    primary: {
      pk: {
        field: "pk",
        composite: ["id"],
      },
      sk: {
        field: "sk",
        composite: ["id"],
      }
    }
  }
}, Config)
