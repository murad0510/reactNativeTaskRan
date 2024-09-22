import { useEffect, useState } from 'react';
import { StyleSheet, View,Text, TextInput, Pressable, ScrollView } from 'react-native'
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function AddNewTask() {
  const [document, setDocument] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [trophy, setTrophy] = useState(false);

  const [newtask,setNewTask]=useState({
    taskTitle:'',
    category:[''],
    note:''
  });

  const handleField=(field:string,data:string)=>{
        setNewTask((prev)=>{
        return{
            ...prev,
            [field]:data
        }
    })
  }

  const saveCategoryInNewTask=(categoryName:string)=>{
    setNewTask(prev => ({
        ...prev,
        category: [...prev.category,categoryName]
      }));
      console.log(categoryName)
    }
    
    const getNewTaskData=()=>{
        console.log('Task title : ',newtask.taskTitle);
        console.log('Task note : ',newtask.note);
          for (let index = 0; index < newtask.category.length; index++) {
            const element = newtask.category[index];
            console.log(`Category ${index+1} : `,element);
          }
  }

  const clickSaveButton=()=>{
      if(document && newtask.category.includes("document")){
          saveCategoryInNewTask("document");
      }
      if(calendar && newtask.category.includes("calendar")){
          saveCategoryInNewTask("calendar");
      }
      if(trophy && newtask.category.includes("trophy")){
          saveCategoryInNewTask("trophy");
      }

      // setNewTask({
      //     taskTitle: '',
      //     category: [],
      //     note: ''
      //   });  
      getNewTaskData();
    }
    
    // useEffect(()=>{
    // })

  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={[styles.circle,styles.circle1]}></View>
          <View style={[styles.circle,styles.circle2]}></View>
          <Text style={styles.header}>Add New Task</Text>
        </View>
        <View style={styles.allElementsView}>
            <ScrollView>
              <View style={{marginBottom:24}}>
                <Text style={styles.taskTitleText}>Task Title</Text>
                <TextInput value={newtask.taskTitle} onChangeText={(text)=>{handleField("taskTitle",text)}} placeholder='Task Title' placeholderTextColor={"#d1d1d1"} style={styles.taskTitleTextInput}></TextInput>
              </View>
              <View style={styles.elementViewInCategory}>
                <Text>Category</Text>
                <View style={styles.category}>
                   <CheckBox
                      checked={document}
                      checkedIcon={ 
                        <View style={[styles.checkBoxIcon,styles.checkBoxDocument]}>
                          <Icon  name="fa-file-lines" size={30} color="blue" />
                        </View>
                      }
                      uncheckedIcon={
                        <View style={styles.checkBoxIcon}>
                          <Icon  name="fa-file-lines" size={30} color="#7394a9" />
                        </View>
                      }
                      onPress={() => setDocument(!document)}
                   />

                   <CheckBox
                      checked={calendar}
                      checkedIcon={
                        <View style={[styles.checkBoxIcon,styles.checkBoxCalendar]}>
                            <Icon name="calendar" size={30} color="blue" />
                        </View>
                      }
                      uncheckedIcon={
                          <View style={styles.checkBoxIcon}>
                            <Icon name="calendar" size={30} color="#7394a9" />
                        </View>
                      }
                      onPress={() => setCalendar(!calendar)}
                   />

                   <CheckBox
                      checked={trophy}
                      checkedIcon={    
                        <View style={[styles.checkBoxIcon,styles.checkBoxTrophy]}>
                          <Icon name="trophy" size={30} color="blue" />
                         </View> 
                      }
                      uncheckedIcon={
                        <View style={styles.checkBoxIcon}>
                          <Icon name="trophy" size={30} color="#7394a9" />
                         </View> 
                      }
                      onPress={() => setTrophy(!trophy)}
                   />
                  
                </View>
              </View>
              <View style={{marginBottom:120}}>
                <Text style={{paddingBottom:10}}>Notes</Text>
                <TextInput value={newtask.note} onChangeText={(text)=>{handleField("note",text)}} multiline={true} placeholder='Notes' placeholderTextColor={"#d1d1d1"} style={[styles.taskTitleTextInput,styles.noteTextInput]}></TextInput>
              </View>
  
              <View style={{marginBottom:23}}>
                <Pressable onPress={clickSaveButton}>
                    <View style={styles.saveView}>
                        <Text style={styles.saveViewText}>Save</Text>
                    </View>
                </Pressable>
              </View>
            </ScrollView>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    saveView:{backgroundColor:"#4b3b93",borderRadius:20,width:"100%"},
    saveViewText:{textAlign:"center",fontSize:20,color:"white",paddingVertical:23},
    noteTextInput:{height:179},
    taskTitleTextInput:{borderWidth:2,borderColor:"#d1d1d1",borderRadius:10,backgroundColor:"white",fontSize:16,paddingLeft:20,lineHeight:40,width:"100%"},
    allElementsView:{backgroundColor:"#ebf0f5",width:"90%",margin:"auto"},
    taskTitleText:{paddingTop:27,paddingBottom:10},
    elementViewInCategory:{flexDirection:"row",alignItems:"center",marginBottom:25},
    category:{flexDirection:"row",justifyContent:"space-between",marginLeft:21},
    checkBoxIcon:{borderRadius:20,padding:10,alignItems:"center",borderWidth:2,borderColor:"white"},
    checkBoxTrophy:{backgroundColor:"#fff5cd"},
    checkBoxCalendar:{backgroundColor:"#e1dcf0"},
    checkBoxDocument:{backgroundColor:"#d2e6f5"},
    taskTitle:{
        color:"black",
        fontSize:15,
    },
    header:{
        margin:"auto",
        fontSize:20,
        color:"white",
        paddingVertical:40,
        paddingHorizontal:143
    },
    container:{
        position:"relative",
        backgroundColor:"#4b3b93",
        width:"100%",
        // height:100,
        borderRadius:10,
        color:"white",
        display:"flex",
        justifyContent:"space-between",
    },
    circle:{
        position:"absolute",
        backgroundColor:"transparant",
        borderRadius:200,
        borderColor:'rgba(255, 255, 255, 0.1)',
        borderWidth:30,
    },
    circle1:{
        width:"50%",
        height:"200%",
        marginTop:"-5%",
        // marginTop:40,
        marginLeft:"-15%",
        // backgroundColor: ,
    },
    circle2:{
        width:"30%",
        height:"200%",
        // marginBottom:50,
        marginLeft:"87%",
        // bottom:-50,
        // right:-50
    },
})

export default AddNewTask
