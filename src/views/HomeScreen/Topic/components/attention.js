import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import ContentItem from '../contentItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { attention } from '../data';
import { THEME_COLOR } from 'src/utils';
import img from 'src/images/wallhaven-kw1ky1.jpg';
import styles from '../style';

let timer;

function Attention(props) {
  const [contentData, setContentData] = useState(attention);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
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
    <>
      <View style={{ borderTopColor: '#eee', borderTopWidth: 8 }} />
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
                style={[styles.contentDataItem, style2.contentDataItem]}>
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
                <View style={[styles.contentDataTitle, style2.contentDataTitle]}>
                  <Text style={style2.type}>{ item.type }</Text>
                  <Text>{ item.title }</Text>
                </View>
                <Text style={style2.itemContent}>{ item.content }</Text>
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
    </>
  )
}

const style2 = StyleSheet.create({
  contentDataItem: {
    paddingHorizontal: 0,
    paddingBottom: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
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
    paddingHorizontal: 8,
    borderColor: '#eee',
    borderWidth: 1,
  },
  type: {
    alignSelf: 'flex-start',
    padding: 2,
    paddingHorizontal: 4,
    marginRight: 10,
    color: THEME_COLOR,
    backgroundColor: '#e5f2ff',
    borderRadius: 2
  },
  contentDataTitle: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  itemContent: {
    paddingHorizontal: 16,
    marginBottom: 16,
    color: '#666'
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

export default Attention;
