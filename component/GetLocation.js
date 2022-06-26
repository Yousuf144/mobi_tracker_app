
 import React, { useState, useEffect } from 'react';
 import GetLocation from 'react-native-get-location'
 import axios from 'axios';
 import * as url from './Endpoints';
 import BackgroundTimer from 'react-native-background-timer';
 import {
 
   Text,
   Image,
   View,TouchableOpacity,StyleSheet,
   Button
 } from 'react-native';
 
 let Location = () => {
  let getlocation = '';
  const [time,settime] = useState('')
  const a = BackgroundTimer.setInterval(() => {

    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15000,
  })
  .then(location => {
    getlocation = location
 
    let sendData = `?accuracy=${getlocation.accuracy}&altitude=${getlocation.altitude}&bearing=${getlocation.bearing}&latitude=${getlocation.latitude}&longitude=${getlocation.longitude}&provider=${getlocation.provider}&speed=${getlocation.speed}&time=${getlocation.time}`;
    let urls = url.base_url+url.sendLocation+sendData
    axios
      .get(urls)
      .then(function (response) {
        settime(JSON.stringify(response.data.Time))

      })
      .catch(function (error) {
 
      })
 
 
  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
  })
  }, 3000000);




 
   return (
 
 
     <View style={{ flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',bottom:30}}>
       <Text style={{fontSize:20,textAlign:'center',marginTop:40}}>Last Location Recived AT:</Text>
       <Text style={{fontSize:16,textAlign:'center',marginTop:20}}>{time}</Text>
       <TouchableOpacity style={styles.loginbtn} ><Text style={styles.btnText}>Logout</Text></TouchableOpacity>

     </View>
   )
 }
 
 export default Location;
 const styles = StyleSheet.create({
  
  loginbtn:{
   padding:12,backgroundColor:'red',width:230,display:'flex',marginLeft:"22%",marginTop:20,borderRadius:40,
  },
  btnText:{
   fontSize:20,textAlign:'center',color:'#ffffff'
  }
 });