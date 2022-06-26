/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import GetLocation from 'react-native-get-location'
import Location from './component/GetLocation';
import Login from './component/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {

  Text,
  Image,
  View,AsyncStorage,
  Button
} from 'react-native';

let App = () => {
  let user = AsyncStorage.getItem('userdata')
console.log(user)
  return (
<View style={{height:"100%"}}>

  {/* <Location /> */}
<Login />
</View>



  )
}

export default App;
