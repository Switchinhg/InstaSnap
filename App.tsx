import { StyleSheet, View , Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Home from './screens/Home/Home';
import Navegacion from './screens/navegacion/Navegacion';
import Profile from './screens/Profile/Profile';
import { useFonts } from 'expo-font';
import AppName from './screens/AppName/AppName';
import {useState} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/search/Search';
import Upload from './screens/upload/Upload';
import Settings from './screens/settings/Settings';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


/* pacifico nombre de la app */
/* Antic_Slab textos */
export default function App() {
  const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

  const [pantalla, setPantalla] = useState(<Home/>)
  const [fontsLoaded] = useFonts({
    'AnticSlab-Regular': require('./assets/Fonts/AnticSlab-Regular.ttf'),
    'Pacifico-Regular': require('./assets/Fonts/Pacifico-Regular.ttf')
  })

  const handelChangePantalla = (nuevaPantalla:any)=>{
    setPantalla(nuevaPantalla)
  }


  if(!fontsLoaded){
    return null
    }

    // function Home() {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <Text>Settings!</Text>
    //     </View>
    //   );
    // }
    
  return (
    <>

    {/* <AppName newStyles={{fontFamily:'Pacifico-Regular'}}/> */}
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
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>

    {/* {pantalla} */}


      
    {/* No existe usuario */}
          {/* Login / Register */}
    {/*  */}
      {/* <Navegacion changePage={handelChangePantalla}/>   */}
    </>
  );
}

const styles = StyleSheet.create({});
