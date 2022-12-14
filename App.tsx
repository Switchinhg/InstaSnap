import { StyleSheet, View , Text, Settings} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import { useFonts } from 'expo-font';
import {useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import AppName from './src/screens/AppName/AppName';
import Search from './src/screens/search/Search';
import Upload from './src/screens/upload/Upload';
import ProfileStack from './src/screens/Profile/ProfileStack';

/* Redux */
  import { Provider } from 'react-redux';
  import store from './src/store';
/* /Redux */

/* pacifico nombre de la app */
/* Antic_Slab textos */
export default function App() {
  const Tab = createBottomTabNavigator();

  const [fontsLoaded] = useFonts({
    'AnticSlab-Regular': require('./assets/Fonts/AnticSlab-Regular.ttf'),
    'Pacifico-Regular': require('./assets/Fonts/Pacifico-Regular.ttf')
  })


  if(!fontsLoaded){
    return null
    }
    
  return (
    <Provider store={store}>
      {/* existe usuario? */}
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 15,
        paddingRight:20
      },
      tabBarActiveTintColor: "rgb(96,181,59)",
      tabBarInactiveTintColor: 'white',
      tabBarIconStyle: { display: "none" },
      tabBarStyle:{
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        borderTopColor: 'transparent'
      },
      headerShown:false,
      
      }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Upload" component={Upload} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
        
      {/* No existe usuario */}
            {/* Login / Register */}
      {/*  */}
    </Provider>
  );
}

const styles = StyleSheet.create({});
