import React, { useState, useMemo } from 'react';
import { StyleSheet, FlatList, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

function ContentItem(props) {
  
  function toDetail(item) {
    props.navigation.navigate("Detail", { id: item.id, date: Date.now() });
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

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={props.contentData}
      refreshing={props.isRefreshing}
      onScroll={props.onScroll}
      onRefresh={props.onRefresh}
      onEndReached={props.onEndReached}
      onEndReachedThreshold="0.5"
      renderItem={
        props.renderItem || RenderItem()
      }
    />
  )
}

const style2 = StyleSheet.create({
  contentDataItemComment: {
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
