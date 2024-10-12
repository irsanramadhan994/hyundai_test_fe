// src/screens/TaskList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { getTasks, deleteTask } from "../../services/AuthService";
import { Link, router } from "expo-router";
import { usePathname } from 'expo-router';
import CreateButton from '@/components/CreateButton';

const TaskList = ({ navigation }: any) => {
  const [tasks, setTasks] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [pathname]);

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
    <View style={styles.container}>
      <CreateButton title='CREATE TASK' onClick={()=>router.navigate('/(tabs)/(task)/create')} />

      <FlatList
      style={styles.container}
        data={tasks}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.list}> 
            <Text>{item.title}</Text>
            <View style={styles.buttonContainer}>
            <Link
            style={styles.link}
               href={{
                 pathname: '/(tabs)/(task)/(details)/[task]',
                 params: { task: item.id}
               }}>
                 Details
               </Link>
            <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
      
         

    </View>
  );
};

export default TaskList;


const styles = StyleSheet.create({
  container:{
    padding:20,
    display:"flex",
    flexDirection:"column",
    gap:10
  },
  buttonContainer:{
    flexDirection:"row",
    display:"flex",
    alignItems:"center"
  },
  link:{
        color:"#007AFF",
        fontSize:18
  },
  list:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    marginLeft:10,
    justifyContent:"space-between",
    marginRight:10,
    backgroundColor:"#fff",
    borderRadius:16,
    borderWidth:1,
    borderColor:"#c4c4c4c4"
  }
})