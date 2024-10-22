import type { AppType } from '@my-app/functions'
import { hc } from 'hono/client';

const api = process.env.EXPO_PUBLIC_API_URL!
export const client = hc<AppType>(api)
