import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, writer, relation } from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = 'tasks';

  @field('firstName') firstName!: string;
  @field('lastName') lastName!: string;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
  // @relation('task_assignments', 'task_id') taskAssignments;

  @writer async createUser(firstName: string, lastName: string) {
    return await this.collections.get<User>('user').create((user) => {
      user.firstName = firstName;
      user.lastName = lastName;
    });
  }
}
