import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const TaskOptionPicker = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'High', value: 'high' },
    { label: 'Normal', value: 'normal' },
  ]);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex:999,

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

export default TaskOptionPicker;
