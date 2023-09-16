import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import fs from 'fs';
import { useEffect } from 'react';
import { StyleSheet,TouchableHighlight,TextInput, Text, View,Button,Pressable,ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import data from './conditions_links.json';
//console.log(data);
const Stack = createNativeStackNavigator();
// const App =()=> {
//   return (
//     <NavigationContainer>
    
//     </NavigationContainer>
//   );
// }
// export default App;

// function test_firebase(){
//   const dataRef = useRef()
 
//   const submithandler = (e) => {
//     e.preventDefault()
//     handleSubmit(dataRef.current.value)
//     dataRef.current.value = ""
//   }
 
//   return (
//     <div className="test_firebase">
//       <form onSubmit={submithandler}>
//         <input type= "text" ref={dataRef} />
//         <button type = "submit">Save</button>
//       </form>
//     </div>
//   );
// }



const MyStack = () => {
  //submit();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Health Center'}}
        />
        <Stack.Screen name="Data Enter" component={DataEnter} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flexDirection: "row" ,padding: 10}}>
    <Pressable
      style ={styles.container}
      title="Enter Profile Information"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Eli'})
      }
    >
      <Text>Profile</Text>
    </Pressable>
    <View
    style = {{flex:1}}>
    </View>
    <Pressable
      style ={styles.container}
      title="Enter Profile Information"
      onPress={() =>
        navigation.navigate('Data Enter')
      }
    >
      <Text>+</Text>
    </Pressable>
  
    </View>
    
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>Name Age</Text>;
};
const DataEnter = ({navigation}) => {
  var fs = require('fs');
  const [conditions,setConditions] = React.useState([]);
  React.useEffect(() => {
  
  console.log(data);
});
  async function fetchUsers(){
    const response = await fetch('conditions_links.json')
    const json = await response.json()
    console.log(json.results);
  }
  function handleFilter(searchTerm){
    setConditions(
      conditions.filter((condition)=>
      condition.name.toUpperCase().includes(searchTerm.toUpperCase)));
  }
  const strinf = JSON.stringify(data);
  const [text, setText] = useState('');
  return (
    
    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40}}
      placeholder="Enter your condition"
      onChangeText={(event)=>handleFilter(event.text) }
      defaultValue={text}
    />
    <View>{strinf}</View>
    <ScrollView>{conditions.map((data)=>(
      <View key={data.id}><Text>{data.link_to_diagnosis_treatment}</Text></View>
      ))}
    </ScrollView> 
   
  </View>);
}
  
const styles = StyleSheet.create({
  container: {
    width:30,
    height:30,
    padding:10,
    flex: .1,
    backgroundColor: 'red',
    alignItems: 'right',
    justifyContent: 'center',
  },
});


/*
for searching through lists:https://www.freecodecamp.org/news/how-to-add-search-to-frontend-app/
for the time:https://medium.com/nightingale/creating-interactive-timelines-with-javascript-b70b7ded3d13


some interesting stuff:
https://www.healthit.gov/topic/scientific-initiatives/pcor/patient-generated-health-data-pghd 
https://www.healthit.gov/playbook/pe/chapter-4/

Health Data Client
Fields
  Name:string BEWARE HIPPA
  ID: generated server side and used in place of name to preserve privacy
  DOB:Date
  Age:derived from DOB

  Gender:string

  Locations:array of strings
    Workplace:address
    Home:address
  Transportation:array of strings
  Occupation process this to get the occupation like from dep of labor database, searchable testentry field
  Insurance Provider
  Healthcare providers
  Medications
    Time frame
    Medication name
    Dosage
    Frequency
  Health History
    Time frame
    Condition process this maybe from external site:https://www.mayoclinic.org/diseases-conditions
      Family History
    Treatment

Doctor Reccomendation
  maybe through https://doctor.webmd.com/
Export
  export as json, csv, etc,
  people choose what fields they want to export
Server Interaction
  upload data to server and add to server database
  people choose what fields they want uploaded


*/