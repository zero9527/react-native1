import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ContentLimit from './contentLimit';
import Recommand from './recommand';
import Attention from './attention';
import Backend from './backend';
import Frontend from './frontend';
import Android from './android';
import IOS from './iOS';
import AI from './ai';

const themeColor = '#007fff';

const HomeContent = (props) => {
  const [contentTagActive, setContentTagActive] = useState(0);
  const [contentLimit, setContentLimit] = useState('all');

  const contentTagList = [
    { id: 1, text: '热门' },
    { id: 2, text: '最新' },
    { id: 3, text: '热榜' },
  ];

  function contentTagChange(index) {
    setContentTagActive(index);
  }

  function ContentComponent({ type, limit, onItemPress }) {
    console.log(limit);
    const list = {
      recommand: <Recommand limit={limit} toDetail={(item) => onItemPress(item)} />,
      attention: <Attention limit={limit} toDetail={(item) => onItemPress(item)} />,
      backend: <Backend limit={limit} toDetail={(item) => onItemPress(item)} />,
      frontend: <Frontend limit={limit} toDetail={(item) => onItemPress(item)} />,
      android: <Android limit={limit} toDetail={(item) => onItemPress(item)} />,
      iOS: <IOS limit={limit} toDetail={(item) => onItemPress(item)} />,
      ai: <AI limit={limit} toDetail={(item) => onItemPress(item)} />,
    };
    return list[type];
  }

  function toDetail(item) {
    props.navigation.navigate("Detail");
  }

  return (
    <ScrollView style={styles.container} ref={view => view && view.scrollTo({ y: 0 })}>
      <ContentLimit type={props.contentType} onLimitChange={(limit) => setContentLimit(limit)} />
      { props.contentType !== 'attention' && <View style={styles.contentTag}>
        {
          contentTagList.map((item, index) => {
            return (
              <Text 
                key={index} 
                style={[
                  styles.contentTagItem, {
                    color: index === contentTagActive ? themeColor : 'gray'
                  }
                ]}
                onPress={() => contentTagChange(index)}
              >{ item.text }</Text>
            )
          })
        }
      </View>}
      <ContentComponent type={props.contentType} limit={contentLimit} onItemPress={(item) => toDetail(item)} />
    </ScrollView>
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
  contentTag: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  contentTagItem: {
    paddingHorizontal: 10
  },
})

export default HomeContent;
