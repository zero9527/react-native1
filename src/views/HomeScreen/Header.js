import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Picker, Text, Animated } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { THEME_COLOR, GRAY_COLOR } from 'src/utils';
import logo from 'src/images/wallhaven-kw1ky2.jpg';

// import MPicker from 'src/components/m-picker';

const Header = (props) => {
  const [contentTypeActive, setContentTypeActive] = useState(props.contentType || 'recommand');
  const [headerTitle, setHeaderTitle] = useState(props.headerTitle);
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

  const headerTitleList = [
    { label: '首页', value: 'home' },
    { label: '沸点', value: 'hotdot' }
  ];
  const contentTypeList = {
    home: [
      { id: 1, text: '推荐', type: 'recommand' },
      { id: 2, text: '关注', type: 'attention' },
      { id: 3, text: '后端', type: 'backend' },
      { id: 4, text: '前端', type: 'frontend' },
      { id: 5, text: 'Android', type: 'android' },
      { id: 6, text: 'iOS', type: 'iOS' },
      { id: 7, text: '人工智能', type: 'ai' },
    ],
    hotdot: [
      { id: 1, text: '推荐', type: 'recommand' },
      { id: 2, text: '关注', type: 'attention' },
      { id: 3, text: '后端', type: 'backend' },
      { id: 4, text: '前端', type: 'frontend' },
      { id: 5, text: 'Android', type: 'android' },
      { id: 6, text: 'iOS', type: 'iOS' },
      { id: 7, text: '人工智能', type: 'ai' },
    ],
    topic: [
      { id: 1, text: '推荐', type: 'recommand' },
      { id: 2, text: '关注', type: 'attention' },
      { id: 3, text: '后端', type: 'backend' },
      { id: 4, text: '前端', type: 'frontend' },
      { id: 5, text: 'Android', type: 'android' },
      { id: 6, text: 'iOS', type: 'iOS' },
      { id: 7, text: '人工智能', type: 'ai' },
    ],
    book: [
      { id: 1, text: '推荐', type: 'recommand' },
      { id: 2, text: '关注', type: 'attention' },
      { id: 3, text: '后端', type: 'backend' },
      { id: 4, text: '前端', type: 'frontend' },
      { id: 5, text: 'Android', type: 'android' },
      { id: 6, text: 'iOS', type: 'iOS' },
      { id: 7, text: '人工智能', type: 'ai' },
    ],
    activity: [
      { id: 1, text: '推荐', type: 'recommand' },
      { id: 2, text: '关注', type: 'attention' },
      { id: 3, text: '后端', type: 'backend' },
      { id: 4, text: '前端', type: 'frontend' },
      { id: 5, text: 'Android', type: 'android' },
      { id: 6, text: 'iOS', type: 'iOS' },
      { id: 7, text: '人工智能', type: 'ai' },
    ],
  };

  useEffect(() => {
    setContentTypeActive(props.contentType)
  }, [props.contentType]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.showHeaderTitle ? 0 : -60,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, [props.showHeaderTitle]);

  function onContentTypeChange(item) {
    setContentTypeActive(item.type);
    props.onContentTypeChange(item.type);
  }

  function headerTitleChange(value) {
    setHeaderTitle(value);
    props.onHeaderTitleChange(value);
  }

  return (
    <Animated.View style={[
      styles.header, {
        translateY: fadeAnim
      }
    ]}>
      <View style={styles.headerMain}>
        <Image 
          source={ logo } 
          style={{ width: 40, height: 40 }} 
          onPress={() => props.navigation.navigate('Home')}
        />
        <Picker
          selectedValue={headerTitle}
          style={{ height: 50, width: 100, color: THEME_COLOR }}
          onValueChange={(itemValue, itemIndex) => headerTitleChange(itemValue)}
        >
          {
            headerTitleList.map((item, index) => {
              return (
                <Picker.Item 
                  key={index} 
                  label={item.label} 
                  value={item.value} 
                  style={{ color:  headerTitle === item.value ? THEME_COLOR : GRAY_COLOR}} 
                />
              )
            })
          }
        </Picker>
        {/* <MPicker 
          select={headerTitle} 
          menuList={[
            { value: 'home', label: '首页' },
            { value: 'hotdot', label: '沸点' },
            { value: 'topic', label: '话题' },
            { value: 'book', label: '小册' },
            { value: 'activity', label: '活动' },
          ]}
          onChange={(value) => headerTitleChange(value)}
        /> */}
      </View>
      <ScrollView horizontal={true} style={styles.contentType}>
        {
          contentTypeList[headerTitle].map((item, index) => {
            return (
              <Text 
                key={index}
                style={[
                  styles.contentTypeItem, 
                  { color: item.type === contentTypeActive ? THEME_COLOR : 'gray'}
                ]} 
                onPress={() => onContentTypeChange(item)}
              >{ item.text }</Text>
            )
          })
        }
      </ScrollView>
    </Animated.View>
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
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3
  },
  headerMain: {
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    zIndex: 10
  },
  headerTitle: {
    position: 'relative',
    color: THEME_COLOR,
    marginLeft: 10
  },
  contentType: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  contentTypeItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: 'gray'
  }
})

export default Header;
