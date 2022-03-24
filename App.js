import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button, TouchableOpacity} from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen from './pages/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="بكج رفيق التاجر" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
