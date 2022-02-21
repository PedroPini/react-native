import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, SafeAreaView, Platform, Dimensions} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
export default function App() {


  return (
  
      <View style={{backgroundColor: "#fff", flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}>
          <View style={{backgroundColor: "dodgerblue", width: 100, height: 100}}></View>
          <View style={{backgroundColor: "gold", width: 100, height: 100}}></View>
          <View style={{backgroundColor: "tomato", width: 100, height: 100}}></View>
          <View style={{backgroundColor: "grey", width: 100, height: 100}}></View>
          <View style={{backgroundColor: "greenyellow", width: 100, height: 100}}></View>
        </View>
  );
}

// const viewStyle = {
//   backgroundColor: "dodgerblue", 
//         width: '50%',
//         height: useDeviceOrientation().landscape ? '100%' : '30%'
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
