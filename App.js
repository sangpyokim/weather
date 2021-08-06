import React, { useEffect, useState } from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather'

const API_KEY = "90f972f0edbc3cba01cc825cd5fc2062"


export default () => {
  const [isLoading, setLoading] = useState(true);
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");

  const getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
    setTemp(data.main.temp)
    setCondition(data.weather[0].main)
  }

  const getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude} } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude)
    } catch (error) {
        Alert.alert("can't find your location", "Error")
    }
  }

  useEffect( () => {
    getLocation()
    setLoading(false)
  }, [])


  return(
    isLoading ? <Loading / > : <Weather temp={Math.round(temp)} condition={condition}/>
  )
}
