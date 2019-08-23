import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Fab } from 'native-base';
import styles from './style';

function ContentItem(props) {
  const [scrollTopLast, setScrollTopLast] = useState(0);
  const [showFabBtn, setShowFabBtn] = useState(false);

  const flatlistRef = React.createRef();
  
  function toDetail(item) {
    props.navigation.navigate("Detail", { id: item.id, date: Date.now() });
  }

  function onScroll(event) {
    const scrollTopCurrent = event.nativeEvent.contentOffset.y;
    props.onScroll(scrollTopCurrent, scrollTopLast);
    DeviceEventEmitter.emit('contentScroll', scrollTopCurrent, scrollTopLast);
    setScrollTopLast(scrollTopCurrent);
    setShowFabBtn(scrollTopCurrent > 500 ? true : false);
  }

  function toTop() {
    setShowFabBtn(!showFabBtn);
    flatlistRef.current.scrollToOffset({ y: 0});
  }

  // 默认的渲染列表
  function RenderItem() {
    return ({item, index}) => (
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
          <Text style={[styles.row, styles.colorGray]}>
            <Text style={{ color: 'purple' }}>{ item.type } · </Text>
            <Text>{ item.author } · { item.time } · </Text>
            <Text>{ item.tag }</Text>
          </Text>
          <View>
            <Text style={styles.contentDataTitle}>{ item.title }</Text>
          </View>
          <Text style={[styles.row, styles.colorGray, style2.commentContainer]}>
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

  return (
    <>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={props.contentData}
        refreshing={props.isRefreshing}
        scrollEventThrottle={100}
        onScroll={onScroll}
        onRefresh={props.onRefresh}
        onEndReached={props.onEndReached}
        onEndReachedThreshold="0.5"
        ref={flatlistRef}
        renderItem={
          props.renderItem || RenderItem()
        }
      />

      {showFabBtn && 
        <Fab
          direction="up"
          containerStyle={{ }}
          style={{ width: 50, height: 50, backgroundColor: '#fff' }}
          position="bottomRight"
          onPress={toTop}>
          <Icon name="caretup" style={{ fontSize: 12, color: '#ccc' }} />
        </Fab>
      }
    </>
  )
}

const style2 = StyleSheet.create({
  commentContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderColor: '#eee',
    borderWidth: 1,
  },
  comment: {
    alignSelf: 'flex-start',
    borderRightColor: '#000',
    borderRightWidth: 1
  }
});

export default ContentItem;
