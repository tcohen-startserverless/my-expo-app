import {  Platform } from 'react-native';
import { Database, DatabaseAdapter } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import schema from '@/data/schema'
import migrations from '@/data/migrations';
import Task  from '@/data/models/Task';
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

export const database = new Database({
  adapter,
  modelClasses: [
    Task
  ],
})
