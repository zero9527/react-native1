import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

function ContentLimit(props) {
  const list = {
    recommand: [],
    attention: [],
    backend: [
      { id: 1, limit: 'All', text: '全部' },
      { id: 1, limit: 'Java', text: 'Java' },
      { id: 1, limit: 'Go', text: 'Go' },
      { id: 1, limit: 'SprintBoot', text: 'Sprint Boot' },
    ],
    frontend: [
      { id: 1, limit: 'All', text: '全部' },
      { id: 1, limit: 'React', text: 'React' },
      { id: 1, limit: 'Vue', text: 'Vue' },
      { id: 1, limit: 'profile', text: '性能优化' },
    ],
    android: [],
    iOS: [],
    ai: [],
  };

  return (
    <View>
      {
        list[props.type].map((item, index) => (
          <Text 
            key={index} 
            style={styles.limitItem}
            onPress={() => props.onLimitChange(item.limit)}
          >{ item.text }</Text>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  limitItem: {
    alignSelf: 'flex-start'
  }
})

export default ContentLimit;
