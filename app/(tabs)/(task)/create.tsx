import TaskCreateButton from "@/components/TaskCreateButton";
import TaskFormContainer from "@/components/TaskFormContainer";
import TaskOptionPicker from "@/components/TaskOption";
import TaskTextInput from "@/components/TaskTextInput";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from 'dayjs';
import { router } from "expo-router";
import { createTask } from "../../../services/AuthService";
import DropDownPicker from "react-native-dropdown-picker";

const CreateTaskScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<any>(null);
  const [items, setItems] = useState([
    { label: 'High', value: 'high' },
    { label: 'Normal', value: 'normal' },
  ]);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", margin: 20,padding:20 };

  const handleCreateTask = async() => {
    try {
      const response = await createTask({
        "title": title,
        "description": description,
        "ownerId":"",
        "priority":value,
        "sharedWith":"",
        "dueDate":date
      });
      router.back()
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  return (
    <View style={styles.container}>
      <TaskFormContainer>
        <TaskTextInput
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />
        <TaskTextInput
          onChangeText={setDescription}
          value={description}
          placeholder="Description"
        />
         <TextInput
         style={styles.input}
          onPress={()=>showModal()}
          value={date.toString()}
          placeholder="Due Date"
        />
       <DropDownPicker
        open={open}
        value={value}
        items={items}
        placeholder='Priority'
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
      />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <DateTimePicker
        mode="single"
        date={date}
        onChange={(params:any) => {
          setDate(params.date)

          hideModal()
        }
        }
      />
          </Modal>
        </Portal>

        <TaskCreateButton onClick={handleCreateTask} title="CREATE" />
      </TaskFormContainer>
    </View>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#d4d4d4",
    gap: 10,
    paddingTop: 200,
    zIndex:999,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Poppins",
  },
  input:{
    
    padding:20,
    backgroundColor:"#fff",
    borderRadius:10
  },
    
    label: {
      fontSize: 16,
    },
    dropdown: {
      height: 40,
      backgroundColor:"#fff",
      borderRadius:10,
      borderWidth:0,
    },
    selected: {
      fontSize: 14,
      color: 'gray',
    },

});
