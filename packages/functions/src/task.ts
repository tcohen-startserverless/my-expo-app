import { Hono } from "hono";
import { TaskService } from "../../core/src/task"
import { TaskSchema } from "../../core/src/task";
import { vValidator } from "@hono/valibot-validator";

export const tasks = new Hono()
  .post('/create', vValidator('json', TaskSchema.CreateTaskInput), async (c) => {
    const input = c.req.valid('json');
    const result = await TaskService.create(input);
    return c.json(result);
  })
  .post('/update', vValidator('json', TaskSchema.UpdateTaskInput), async (c) => {
    const input = c.req.valid('json');
    const result = await TaskService.patch(input);
    return c.json(result);
  })
  .post('/delete', vValidator('json', TaskSchema.DeleteTaskInput), async (c) => {
    const input = c.req.valid('json');
    const result = await TaskService.remove(input);
    return c.json(result);
  })
  .get('/:id', vValidator('param', TaskSchema.GetTaskInput), async (c) => {
    const params = c.req.param();
    const result = await TaskService.get({id: params.id});
    return c.json(result);
  })
