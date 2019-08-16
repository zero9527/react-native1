import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableHighlight, View, Text, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const List = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const arr = [
    { id: 1, text: 'aaaaaaaaaa', date: '2019-08-01' },
    { id: 2, text: 'bbbbbbbbbb', date: '2019-08-02' },
    { id: 3, text: 'cccccccccc', date: '2019-08-03' },
    { id: 4, text: 'dddddddddd', date: '2019-08-04' },
    { id: 5, text: 'eeeeeeeeee', date: '2019-08-05' },
    { id: 6, text: 'ffffffffff', date: '2019-08-06' },
    { id: 7, text: 'gggggggggg', date: '2019-08-07' },
    { id: 8, text: 'hhhhhhhhhh', date: '2019-08-08' },
  ];

  // 貌似前进不会注销，后退会被注销
  useEffect(() => {
    // 从首页来的时候打印
    // console.log('list');

    return () => {
      // 后退回首页的时候打印
      // console.log('list unmount');
    }
  }, []);
  
  toDetail = () => {
    props.navigation.navigate('Detail');
  }

  function favClick(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }

  return (
    <View>
      <Text style={styles.title}>list</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={arr}
        renderItem={
          ({item, index}) => (
            <TouchableHighlight underlayColor="#f6f6f6" onPress={toDetail}>
              <View style={styles.listItem}>
                  <View style={styles.textContent}>
                    <Text style={{ fontSize: 18 }}>{ item.text }</Text>
                    <Text style={styles.date}>{ item.date }</Text>
                  </View>
                <AntDesign 
                  style={styles.icon} 
                  name="hearto" 
                  size={20} 
                  color={index === activeIndex ? 'tomato' : 'gray'} 
                  onPress={() => favClick(index)} 
                />
              </View>
            </TouchableHighlight>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 20,
    backgroundColor: '#eee'
  },
  listItem: {
    position: 'relative',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  textContent: {
    maxWidth: '90%',
  },
  date: {
    fontSize: 12,
    color: 'gray'
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: '50%',
    padding: 4
  }
});

export default List;
