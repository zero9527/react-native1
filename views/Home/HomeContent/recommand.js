import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Image, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { recommand } from '../data';

function Recommand(props) {
  const [contentData, setContentData] = useState(recommand);

  function itemClick(item) {
    props.toDetail(item);
  }

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={contentData}
      renderItem={
        ({item, index}) => (
          <TouchableHighlight 
            underlayColor="#f6f6f6"
            onPress={() => itemClick(item)}>
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

export default Recommand;
