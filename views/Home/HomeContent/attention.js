import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import ContentItem from './contentItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { headerTagChangeList } from './index';
import styles from './style';
import { attention } from '../data';

let timer;

function Attention(props) {
  const [contentData, setContentData] = useState(attention);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    // if (!headerTagChangeList[props.contentType]) 
    onRefresh();

    return () => {
      clearTimeout(timer);
    }
  }, [props]);

  function onRefresh() {
    setIsRefreshing(true);
    timer = setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }

  function onEndReached({ distanceFromEnd }) {
    console.log('distanceFromEnd: ', distanceFromEnd);
    setContentData(contentData.concat(attention[0]));
  }

  function onScroll(e) {
    // console.log(e);
  }

  function onTagChange(type) {
    console.log(type);
  }

  function toDetail(item) {
    props.navigation.navigate("Detail");
  }

  return (
    <ContentItem 
      onTagChange={onTagChange}
      contentData={contentData} 
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onScroll={onScroll}
      {...props} 
      renderItem={
        ({item, index}) => (
          <TouchableHighlight 
            underlayColor="#f6f6f6"
            onPress={() => toDetail(item)}>
            <View 
              style={styles.contentDataItem}>
              <Text style={[styles.row, styles.colorGray]}>
                <Text style={{ color: 'purple' }}>{ item.type } · </Text>
                <Text>{ item.author } · { item.time } · </Text>
                <Text>{ item.tag }</Text>
              </Text>
              <View>
                <Text style={styles.contentDataTitle}>{ item.title }</Text>
              </View>
              <Text style={[styles.row, styles.colorGray, style2.contentDataItemComment]}>
                <Text style={style2.comment}>
                  <Icon name="thumbs-up" /> { item.like }
                </Text>
                &emsp;
                <Text>
                  <Icon name="comments" /> { item.talk }
                </Text>
              </Text>
            </View>
          </TouchableHighlight>
        )
      }
    />
  )
}

const style2 = StyleSheet.create({
  contentDataItemComment: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderColor: '#eee',
    borderWidth: 1,
  },
  comment: {
    alignSelf: 'flex-start',
    borderRightColor: '#000',
    borderRightWidth: 1
  }
});

export default Attention;
