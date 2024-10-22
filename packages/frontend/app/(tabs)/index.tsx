import { StyleSheet } from 'react-native';
import { client } from '@/api';
import Task from '@/data/models/Task';
import { withObservables } from '@nozbe/watermelondb/react'


export default function HomeScreen() {
  return (
    <div>
      <EnhancedTask/>
    </div>
  );
}

const component = ({ task }: { task: Task }) => {
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.description}</p>
    </div>
  );
};

const enhance = withObservables(['task'], ({ task }) => ({
  task
}));

const EnhancedTask = enhance(component);

const styles = StyleSheet.create({
});
