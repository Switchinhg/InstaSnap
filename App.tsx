import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [item, setItem] = useState<string>('')
  const [lista, setLista] = useState<{id:string,value:string}[]>([])

  const [itemSelected,setItemSelected] = useState<{id:string, value:string}[]>()
  const [modalVisible, setModalVisible]  = useState(false)

  
  const onHandleChangeItem = (t:string) =>{
    setItem(t)
  }
  const onHandleSubmitItem = () =>{
    if(item){
      setLista(current => [...current,{id: Math.random().toString(), value:item}])
      setItem('')
    }
  }

  const renderItem = ({item}:any)=>(
      <TouchableOpacity onPress={()=>selectedItem(item.id)} key={item.id} style={styles.notasWrap}>
        <Text style={styles.item}>{item.value}</Text>
      </TouchableOpacity>
  )
  const selectedItem = (id:string) =>{
    setItemSelected(lista.filter((item)=>item.id === id) )
    setModalVisible(true)

  }
  const deleteItem  = ()=>{
    setLista(currentState=>
        currentState.filter((item)=>item.id !== itemSelected![0].id)/* no es error, es un warning */
    )
    setItemSelected([])
    setModalVisible(false)
  }

  const cerrarModal = () =>{
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      

        <View style={styles.app}>
          <Text style={styles.appText}>App de notas</Text>
        </View>

          <View style={styles.agregarNota}>
            <TextInput 
              value={item} 
              style={styles.input} 
              placeholder='Agregar Nota' 
              onChangeText={onHandleChangeItem}
              placeholderTextColor="white"
              keyboardAppearance='dark'
              autoFocus={true}
              />
              <Pressable  onPress={onHandleSubmitItem}> 
                <Text style={{color:"white",padding:20, borderWidth:1,borderColor:'white'}}> Agregar</Text>
              </Pressable>
          </View>


          <View style={styles.notassss}>

              <FlatList
                data={lista}
                renderItem={renderItem}
                />

          </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          Alert.alert("modal has been closed")
          setModalVisible(!modalVisible)
        }}
      >
          <View style={styles.containerModal}>
            <View style={styles.containerView}>
              <Text style={styles.textQ}>Eliminar? 😭</Text>
              <View style={{flexDirection:'row'}}>
              <Pressable onPress={cerrarModal} style={{backgroundColor:'#6d6875'}} >
              <Text style={styles.text}>No, no eliminar 🤗</Text>
              </Pressable>
              <Pressable onPress={deleteItem} style={{backgroundColor:'#3d405b'}} >
              <Text style={styles.text}>Si, eliminar 😎</Text>
              </Pressable>
              </View>
            </View>
          </View>
      </Modal>


      
    </View>
  );
}

const styles = StyleSheet.create({
  containerView:{
    backgroundColor:'#001219',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  textQ:{
    color:"white",
    fontSize:30,
    padding:10,
    paddingBottom:50
  },
  text:{
    color:"white",
    fontSize:20,
    padding:10
  },
  container: {
    paddingTop:20,
    alignItems: 'center',
    flex:1,
    backgroundColor:'#2b2d42'
    
  },
  containerModal:{
    flex:1,
    justifyContent:'center',
    
  },
  input:{
    width: 200,
    height: '100%',
    fontSize:20,
    color:'white',
    paddingLeft:20,
    borderWidth:1,
    borderColor:'white'

  },
  agregarNota:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'black',
    backgroundColor:"#6d6875",
  },
  notasWrap:{
    padding:5,
    width :300,
    borderWidth:1,
    borderColor:'white',
    marginTop: 10,
    backgroundColor:'#3d405b',
  },

  item:{
    padding:10,
    color:'white'

  },
  app:{
    margin:10,
    height:"10%",
    alignItems:"center"
  },
  appText:{
    marginTop:10,
    fontSize:40,
    color:"white"
  },
  notassss:{
    maxHeight:430,
  }

});



/* Eventos y lista optimizada 31 oct */