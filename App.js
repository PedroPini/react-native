import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, SafeAreaView, Platform, Dimensions} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
export default function App() {


  return (
  
      <View style={{backgroundColor: "dodgerblue", 
        flex: 1}}>
          <View style={{backgroundColor: "dodgerblue", 
         flex: 2}}></View>
         <View style={{backgroundColor: "gold", 
         flex: 1}}></View>
         <View style={{backgroundColor: "tomato", 
         flex: 1}}></View>
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
