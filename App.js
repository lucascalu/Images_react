import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import {StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 400, height: 400}} />
      
      
      
    </View>
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
