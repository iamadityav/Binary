import { View, Text ,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'

const Clock = () => {
const [time,setTime]=useState(new Date().toLocaleTimeString());

useEffect(()=>{
    const interval = setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000);
    return ()=>{
            clearInterval(interval);
        }
},[])

  return (
    <View >
      <Text style={styles.date}>
        {/* {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
        {time}
        </Text>
    </View>
  )
}

export default Clock

const styles = StyleSheet.create({
date:{
    fontSize:25,
    textAlign:"center",
    // margintop:15,
    position: 'center',
    top: 15,
    color:"#d7d0d0",
    right:5,
}
})