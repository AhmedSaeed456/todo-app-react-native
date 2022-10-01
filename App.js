import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native';
import Task from './components/Task'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(null);

  
  const taskHandler = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask(null);
    console.log(taskItems);
  }

  const completeTask = (index) => { 
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
 
  return (
    // today's tasks
  
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <Text style={styles.subTitle}>note: tap on task to remove it</Text>
        <ScrollView style={{ width: '100%',height:'85%'}}>
        <View style={styles.items}>
            {/* this is where items will go */}
            {
              
              taskItems.map((item,index)=>{
                return (
                  <TouchableOpacity onPress={()=>completeTask(index)} >
                    <Task key={index} text={item} />
                  </TouchableOpacity>
                );
              
              })
            }
          
          {/* <Task text="playing"/>
            <Task text="reading" /> */}
            
        </View>
        </ScrollView>
        </View>
        {/* write the tast section */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />

          <TouchableOpacity onPress={()=> taskHandler()}>
            <View style={styles.addWrapper}>
              <FontAwesome5 name="seedling" size={15} style={styles.addIcon} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        
        </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8fa6c9",

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:"#fff",
    width: 300,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    paddingLeft:20,
    paddingRight:20,
    
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor:"#C0C0C0",
  },
  addIcon: {
    color:"#55BCF6"
  },
  subTitle: {
    color: "#252525",
    opacity: 0.5,
    marginHorizontal:5,
  }
 
});
