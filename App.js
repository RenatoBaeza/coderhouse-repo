import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    if (task !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), value: task },
      ]);
      setTask('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new tasks..."
            placeholderTextColor="gray"
            autoCorrect={false}
            autoCapitalize="none"
            cursorColor="#424DEE"
            selectionColor="red"
            onChangeText={onHandlerChangeText}
            value={task}
          />
          <Button title="ADD" color="#424D9E" onPress={onHandlerCreateTask} disabled={task.length === 0} />
        </View>

        <View style={styles.listContainer}>
          {tasks.map((item) => (
            <View style={styles.containerItem} key={item.id}>
              <Text style={styles.listItem}>{item.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}