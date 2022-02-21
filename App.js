import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const handlePress = () => Alert.prompt("My Title", "My Message", text => console.log(text))
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title="Click Me" onPress={() => Alert.prompt("My Title", "My Message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const containerStyle = {backgroundColor: "orange"}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
