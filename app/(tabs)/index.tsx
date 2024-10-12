// src/screens/TaskList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { getTasks, deleteTask } from "../../services/AuthService";
import { router } from "expo-router";
import TaskCreateButton from '@/components/TaskCreateButton';

const TaskList = ({ navigation }: any) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <View>
      <TaskCreateButton title='CREATE TASK' onClick={()=>router.navigate('/(tabs)/(task)/create')} />

      <FlatList
        data={tasks}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.list}> 
            <Text>{item.title}</Text>
            <Button title="Details" onPress={() => navigation.navigate('TaskDetails', { id: item.id })} />
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
      
         

    </View>
  );
};

export default TaskList;


const styles = StyleSheet.create({
  list:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:"#fff",
    borderRadius:16,
    borderWidth:1,
    borderColor:"#c4c4c4c4"
  }
})