import type { AppType } from '@my-app/functions'
import { hc } from 'hono/client';

const api = process.env.EXPO_PUBLIC_API_URL
if (!api) {
  throw new Error('EXPO_PUBLIC_API_URL is not defined')
}
export const client = hc<AppType>(api)
