import { StyleSheet } from 'react-native';
import Home from './screens/Home/Home';
import Navegacion from './screens/navegacion/Navegacion';
import Profile from './screens/Profile/Profile';
import { useFonts } from 'expo-font';
import AppName from './screens/AppName/AppName';
import {useState} from 'react'

/* pacifico nombre de la app */
/* Antic_Slab textos */
export default function App() {
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
    
  return (
    <>
    <AppName newStyles={{fontFamily:'Pacifico-Regular'}}/>
    {/* existe usuario? */}
      
    {pantalla}
      
    {/* No existe usuario */}
          {/* Login / Register */}
    {/*  */}
      <Navegacion changePage={handelChangePantalla}/>  
    </>
  );
}

const styles = StyleSheet.create({});
