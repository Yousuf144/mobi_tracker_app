
 import React, { useState, useEffect } from 'react';

 import axios from 'axios';
 import * as url from './Endpoints';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
 import {
 
   Text,StyleSheet,
   Image,
   View,ActivityIndicator,ToastAndroid,AsyncStorage,
   Button,TextInput,TouchableOpacity ,ScrollView
 } from 'react-native';
 
 let Login = () => {

  let [email,setemail] = useState('')
  let [password,setpassword] = useState('')
  let [loader,setloader] = useState(false)
  const  senddata = () =>{
setloader(true)
    let senditem = `?email=${email}&password=${password}`;
   console.log('hit')
    let urls = url.base_url+url.login+senditem
    axios
      .get(urls)
      .then(function (response) {
        {(JSON.stringify(response.data.Status) == "Login Successfully")?AsyncStorage.setItem('userdata','dadasd'):''}
        let res = JSON.stringify(response.data);
        console.log(JSON.stringify(response.data))
  setloader(false)
  setemail(null)
setpassword(null)
  ToastAndroid.showWithGravity(
  response.data.Status  ,
     ToastAndroid.LONG,
      ToastAndroid.CENTER
    )


      })
      .catch(function (error) {
  
      })
  }

 
   return (
 
    <ScrollView >
          {(loader==true)?
          <View style={styles.container}>
          <ActivityIndicator size="large" />
          </View>
          :
          
     <View >
       
        <Image source={ require('../Assets/bg.png')} style={{marginBottom:50,marginTop:30}} />
  <View style={{backgroundColor:'#dce0e4',borderRadius:28,height:500}}>
    <Text style={{textAlign:'center',fontSize:35,paddingTop:5,paddingBottom:30}}>Login</Text>

    <TextInput placeholder='Enter Your Email' style={styles.EmailInput} onChangeText={emailval=>setemail(emailval)}/>
    <TextInput placeholder='Enter Your Pssword' style={styles.PasswordInput} onChangeText={pswd=>setpassword(pswd)}/>
    <TouchableOpacity style={styles.loginbtn} onPress={senddata}><Text style={styles.btnText}>Login</Text></TouchableOpacity>
       
</View>     
     </View>
 }
     </ScrollView>
   )
 }
 
 export default Login;

 const styles = StyleSheet.create({
 EmailInput:{
  borderColor:'red',borderWidth:1,marginLeft:10,marginRight:10,borderRadius:20
 } ,
 PasswordInput:{
  borderColor:'red',borderWidth:1,marginLeft:10,marginRight:10,borderRadius:20,marginTop:10
 },
 loginbtn:{
  padding:12,backgroundColor:'red',width:130,display:'flex',marginLeft:"32%",marginTop:20,borderRadius:40
 },
 btnText:{
  fontSize:20,textAlign:'center',color:'#ffffff'
 }
 ,  container: {
  flex: 1,
  justifyContent: "center",
  flexDirection: "row",
  justifyContent: "space-around",
  padding: 10,
  paddingTop:'80%'
},

});