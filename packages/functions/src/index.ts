import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { handle } from 'hono/aws-lambda'
import { tasks } from './task'

const app = new Hono()
  .use(logger())
  .get('/hello', async (c) => {
    return c.json({ message: 'Hello, World!' })
  })
  .route('/tasks', tasks)

export const handler = handle(app)
export type AppType = typeof app
