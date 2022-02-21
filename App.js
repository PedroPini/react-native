import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const handlePress = () => console.log("text clicked")
  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello !</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image 
        fadeDuration={1000}
        source={{
          width:200,
          height:300,
          uri: "https://picsum.photos/200/300"
          }} />
      </TouchableOpacity>
        <TouchableNativeFeedback>
          <View style={{ width:200, height:70, backgroundColor:"dodgerblue"}}></View>
        </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
