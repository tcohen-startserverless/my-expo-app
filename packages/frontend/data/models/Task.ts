import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, writer, relation } from '@nozbe/watermelondb/decorators';

export default class Task extends Model {
  static table = 'tasks';

  @field('name') name!: string;
  @field('description') description!: string;
  @field('is_completed') isCompleted!: boolean;
  @date('due_at') dueAt!: Date;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  // @relation('task_assignments', 'task_id') taskAssignments;

  @writer async createTask(name: string, description: string, dueAt: Date) {
    return await this.collections.get<Task>('tasks').create((task) => {
      task.name = name;
      task.description = description;
      task.dueAt = dueAt;
    });
  }
}