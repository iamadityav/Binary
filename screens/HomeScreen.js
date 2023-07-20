import { StyleSheet, Pressable, Image, Text,SafeAreaView, View } from 'react-native';
import React from 'react';
import Clock from '../components/Clock'

const HomeScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('BinaryScreen');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.clock}>
         <Clock/>
      </View>
      <View style={styles.centeredContainer}>
              <Pressable onPress={onPressHandler}>
             <Text style={styles.binary}> θ1</Text>
        </Pressable>
      </View>
      <View style={styles.vertical} />
      <View style={styles.horizontal} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    flex: 1,
  },
  centeredContainer: {
    alignItems: 'center',
    paddingTop: 300,
    right:10,
  },

  vertical: {
    width: 1.2,
    position: 'absolute',
    top: 0,
    right: 40,
    height: '40%',
    backgroundColor: '#f3ecec',
  },
  horizontal: {
    width: 1.2,
    position: 'absolute',
    bottom: 0,
    left: 40,
    height: '42%',
    backgroundColor: '#eae9ea',
  },
  binary:{
    fontSize:100,
    color:'#22b917',
    justifyContent: 'center',

  }
});
