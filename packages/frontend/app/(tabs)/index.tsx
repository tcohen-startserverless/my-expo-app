import { StyleSheet, Platform } from 'react-native';
import type { AppType } from '@my-app/functions'
import { hc } from 'hono/client';
import { Database, DatabaseAdapter } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import schema from '@/model/schema'
import migrations from '@/model/migrations';
import Task  from '@/model/Task';

let adapter: DatabaseAdapter;

if (Platform.OS === 'web') {
  adapter = new LokiJSAdapter({
    schema,
    migrations,
    useWebWorker: false,
    useIncrementalIndexedDB: true,
    onSetUpError: error => {
      console.error(error)
    }
  });
} else {
  adapter = new SQLiteAdapter({
    schema,
    migrations,
    onSetUpError: error => {
      console.error(error)
    }
  });
}

const database = new Database({
  adapter,
  modelClasses: [
    Task
  ],
})

const api = process.env.EXPO_PUBLIC_API_URL!
const client = hc<AppType>(api)

export default function HomeScreen() {
  return (
    <div>
    </div>
  );
}

const styles = StyleSheet.create({
});
