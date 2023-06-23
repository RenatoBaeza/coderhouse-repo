import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Add new tasks...' placeholderTextColor={'gray'} autoCapitalize='none' cursorColor='#424DEE' selectionColor={'red'}/>
          <Button title='Create' color='#424D9E' />
        </View>
      </View>
    </SafeAreaView>
  );
}