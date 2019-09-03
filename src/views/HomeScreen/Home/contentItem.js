import React, { useState, useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, Text, TouchableHighlight, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fab } from 'native-base';
import { THEME_COLOR } from 'src/utils';
import styles from '../contentCpmponentStyle';

function ContentItem(props) {
  const [contentTagActive, setContentTagActive] = useState('hot');
  const [scrollTopLast, setScrollTopLast] = useState(0);
  const [showFabBtn, setShowFabBtn] = useState(false);

  const flatlistRef = React.createRef();
  
  const contentTagList = [
    { id: 1, text: '热门', type: 'hot' },
    { id: 2, text: '最新', type: 'new' },
    { id: 3, text: '热榜', type: 'rank' },
  ];

  function contentTagChange(type) {
    setContentTagActive(type);
    props.onTagChange(type);
  }

  function toDetail(item) {
    props.navigation.navigate("Detail", { id: item.id, date: Date.now() });
  }

  function onScroll(event) {
    const scrollTopCurrent = event.nativeEvent.contentOffset.y;
    setScrollTopLast(scrollTopCurrent);
    setShowFabBtn(scrollTopCurrent > 500 ? true : false);
    DeviceEventEmitter.emit('contentScroll', scrollTopCurrent, scrollTopLast);
  }

  function toTop() {
    setShowFabBtn(!showFabBtn);
    flatlistRef.current.scrollToOffset({ y: 0});
  }

  const showBorder = useMemo(() => {
    return props.contentType === 'recommand'
  }, [props.contentType]);

  function ListHeaderComponent() {
    return props.contentType !== 'attention' && (
      <View style={{
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 6,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderTopColor: '#eee',
        borderTopWidth: showBorder ? 8 : 0
      }}>
        {
          contentTagList.map((item, index) => {
            return (
              <View key={index} >
                {
                  index !== 0 && (
                    <View style={{ borderRightColor: '#eee', borderRightWidth: 1 }} />
                  )
                }
                <Text 
                  style={{
                      paddingHorizontal: 10,
                      color: item.type === contentTagActive ? THEME_COLOR : 'gray'
                    }}
                  onPress={() => contentTagChange(item.type)}
                >{ item.text }</Text>
              </View>
            )
          })
        }
      </View>
    )
  }

  // 默认的渲染列表
  function RenderItem() {
    return ({item, index}) => (
      <TouchableHighlight 
        underlayColor="#f6f6f6"
        onPress={() => toDetail(item)}>
        <View 
          style={[styles.contentDataItem]}>
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
        ListHeaderComponent={ListHeaderComponent}
        data={props.contentData}
        refreshing={props.isRefreshing}
        onScroll={onScroll}
        onRefresh={props.onRefresh}
        onEndReached={props.onEndReached}
        onEndReachedThreshold="0.5"
        ref={flatlistRef}
        style={props.style || styles.flatlist}
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
          <Icon name="caret-up" style={{ fontSize: 20, color: '#ccc' }} />
        </Fab>
      }
    </>
  )
}

const style2 = StyleSheet.create({
  commentContainer: {
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

export default ContentItem;
