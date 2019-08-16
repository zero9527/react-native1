import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import { frontend } from '../data';

function Frontend() {
  const [contentData, setContentData] = useState(frontend);

  return (
    <>
      {
        contentData.map((item, index) => {
          return (
            <View 
              key={index}
              style={styles.contentDataItem}
            >
              <View style={[styles.row]}>
                <Text style={{ color: 'purple' }}>{ item.type } · </Text>
                <Text style={styles.grayItem}>{ item.author } · { item.time } · </Text>
                <Text style={styles.grayItem}>{ item.tag }</Text>
              </View>
              <View>
                <Text style={styles.contentDataTitle}>{ item.title }</Text>
              </View>
              <View style={[styles.row]}>
                <Text style={styles.grayItem}>
                  like: { item.like }
                </Text>
                <Text style={styles.grayItem}>
                  talk: { item.talk }
                </Text>
              </View>
            </View>
          )
        })
      }
    </>
  )
}

export default Frontend;
