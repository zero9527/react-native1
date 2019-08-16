import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { attention } from '../data';

function Attention() {
  const [contentData, setContentData] = useState(attention);

  return (
    <>
      {
        contentData.map((item, index) => {
          return (
            <View 
              key={index}
              style={styles.contentDataItem}
            >
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
          )
        })
      }
    </>
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
