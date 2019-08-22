import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentItem from '../contentItem';
import { recommand } from '../data';
import img from 'src/images/wallhaven-kw1ky1.jpg';
import { THEME_COLOR } from 'src/utils';
import styles from '../style';

let timer;

function Recommand(props) {
  const [contentData, setContentData] = useState(recommand);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    onRefresh();

    return () => {
      clearTimeout(timer);
    }
  }, []);

  function onRefresh() {
    setIsRefreshing(true);
    timer = setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }

  function onEndReached({ distanceFromEnd }) {
    setContentData(contentData.concat(recommand[0]));
  }

  function onScroll(e) {
    // console.log(e);
  }

  function onTagChange(type) {
    console.log(type);
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
              style={[
                styles.contentDataItem, {
                  borderTopColor: '#eee',
                  borderTopWidth: index === 0 ? 12 : 0
                }
              ]}>
              <View style={style2.header}>
                <Image 
                  source={img} 
                  resizeMode="contain" 
                  resizeMethod="auto" 
                  style={style2.headimg} 
                />
                <View>
                  <Text style={style2.author}>{ item.author }</Text>
                  <Text style={[styles.row, styles.colorGray]}>{ item.work } · { item.time } · </Text>
                </View>
              </View>
              <Text style={style2.itemContent}>{ item.content }</Text>
              <Text 
                style={[
                  style2.tag, {
                    display: item.tag ? 'flex' : 'none'
                  }
                ]}
              >{ item.tag }</Text>
              <View style={[styles.row, style2.commentContent]}>
                <Text style={[style2.contentCommentItem, styles.colorGray]}>
                  <Icon name="thumbs-up" /> { item.like }
                </Text>
                <Text style={style2.line} />
                <Text style={[style2.contentCommentItem, styles.colorGray]}>
                  <Icon name="comments" /> { item.talk }
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        )
      }
    />
  )
}

const style2 = StyleSheet.create({
  contentDataItem: {
    paddingBottom: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headimg: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 50
  },
  author: {
    fontSize: 16
  },
  commentContainer: {
    alignSelf: 'flex-start',
    // paddingVertical: 2,
    paddingHorizontal: 16,
    borderColor: '#eee',
    borderWidth: 1,
  },
  itemContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tag: {
    alignSelf: 'flex-start',
    padding: 2,
    paddingHorizontal: 6,
    marginBottom: 10,
    marginLeft: 16,
    color: THEME_COLOR,
    borderColor: THEME_COLOR,
    borderWidth: 1,
    borderRadius: 20
  },
  commentContent: {
    justifyContent: 'space-around',
    paddingTop: 8,
    borderTopColor: '#eee',
    borderTopWidth: 1
  },
  contentCommentItem: {
    flex: 1,
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
  line: {
    borderRightColor: '#eee',
    borderRightWidth: 1
  }
});

export default Recommand;
