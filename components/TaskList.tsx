import * as React from 'react';
import { List, MD3Colors } from 'react-native-paper';

const TaskList = () => (
  <List.Section>
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
    />
  </List.Section>
);

export default TaskList;