import React, { useState } from "react";
import { StyleSheet, View, Image, Picker, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import logo from '../../../images/wallhaven-kw1ky2.jpg';

const themeColor = '#007fff';

const Header = (props) => {
  const [headerTagActive, setHeaderTagActive] = useState(0);
  const [headerTitle, setHeaderTitle] = useState('home');

  const headerTagList = [
    { id: 1, text: '推荐', type: 'recommand' },
    { id: 2, text: '关注', type: 'attention' },
    { id: 3, text: '后端', type: 'backend' },
    { id: 4, text: '前端', type: 'frontend' },
    { id: 5, text: 'Android', type: 'android' },
    { id: 6, text: 'iOS', type: 'iOS' },
    { id: 7, text: '人工智能', type: 'ai' },
  ];

  function headerTitleChange(value) {
    setHeaderTitle(value);
  }

  function headerTagChange(item, index) {
    setHeaderTagActive(index);
    props.onTagChange(item.type);
  }

  return (
    <View style={styles.header}>
      <View style={styles.headerMain}>
        <Image 
          source={logo} 
          style={{ width: 40, height: 40 }} 
          onPress={() => props.navigation.navigate('Home')}
        />
        <Picker
          selectedValue={headerTitle}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => headerTitleChange(itemValue)}>
          <Picker.Item label="首页" value="home" />
          <Picker.Item label="沸点" value="feidian" />
          <Picker.Item label="话题" value="topic" />
          <Picker.Item label="小册" value="book" />
          <Picker.Item label="活动" value="activity" />
        </Picker>
      </View>
      <ScrollView horizontal={true} style={styles.headerTag}>
        {
          headerTagList.map((item, index) => {
            return (
              <Text 
                key={index}
                style={[
                  styles.headerTagItem, 
                  { color: index === headerTagActive ? themeColor : 'gray'}
                ]} 
                onPress={() => headerTagChange(item, index)}
              >{ item.text }</Text>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  colorGray: {
    color: '#ccc',
    fontSize: 14
  },
  header: {
    paddingVertical: 10,
  },
  headerMain: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  headerTitle: {
    color: themeColor,
    marginLeft: 10
  },
  headerTag: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  headerTagItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: 'gray'
  }
})

export default Header;
