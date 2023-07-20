import React, { useState } from 'react';
import { View, Dimensions, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const BinaryNumberScreen = ({ numColumns }) => {
  const binaryNumber = Array.from({ length: 513 }, (_, index) => (index % 2 === 0 ? '0' : '1')).join('');
  const { width } = Dimensions.get('window');

  const [data, setData] = useState([
    { id: '1', value: binaryNumber },
  ]);

  const size = width / numColumns;

  const renderItem = ({ item }) => (
    <View>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );

  const handleEndReached = () => {

    const newData = Array.from({ length: 3 }, (_, index) => ({
      id: `new_${index}`,
      value: binaryNumber,
    }));

    setData((prevData) => [...prevData, ...newData]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        onEndReached={handleEndReached} 
        onEndReachedThreshold={0.1} 
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#3bf13b',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default BinaryNumberScreen;



// import React from 'react';
// import { View, Text, ScrollView,SafeAreaView, StyleSheet } from 'react-native';

// const BinaryNumberScreen = () => {
//     const binaryNumber = Array.from({ length: 513 }, (_, index) => (index % 2 === 0 ? '0' : '1')).join('');


//     return (
//       <SafeAreaView style={style.container}>
//         <ScrollView style={style.scroll}>
//           <Text style={style.text}>{binaryNumber}</Text>
//           <Text style={style.text}>{binaryNumber}</Text>
//           <Text style={style.text}>{binaryNumber}</Text>
//           <Text style={style.text}>{binaryNumber}</Text>
//           <Text style={style.text}>{binaryNumber}</Text>
//           <Text style={style.text}>{binaryNumber}</Text> 
//         </ScrollView>
//       </SafeAreaView>
//     );
//   };
//   export default BinaryNumberScreen;

//   const style=StyleSheet.create({ 
//     text:{
//       color:'#3bf13b'
//     },
//     container:{
//       flex:1,
//             backgroundColor:'#000000'
//     }
//   })

