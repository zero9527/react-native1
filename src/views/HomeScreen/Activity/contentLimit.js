import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { THEME_COLOR } from 'src/utils';

function ContentLimit(props) {
  const [limitActive, setLimitActive] = useState(0);

  const list = {
    recommand: [],
    attention: [],
    backend: [
      { id: 1, limit: 'All', text: '全部' },
      { id: 2, limit: 'Java', text: 'Java' },
      { id: 3, limit: 'GoGoLang', text: 'GoLang' },
      { id: 4, limit: 'SprintBoot', text: 'Sprint Boot' },
      { id: 5, limit: 'MySQL', text: 'My SQL' },
      { id: 6, limit: 'Docker', text: 'Docker' },
      { id: 7, limit: 'MongoDB', text: 'MongoDB' },
      { id: 8, limit: 'Nginx', text: 'Nginx' },
    ],
    frontend: [
      { id: 1, limit: 'All', text: '全部' },
      { id: 1, limit: 'React', text: 'React' },
      { id: 1, limit: 'Vue', text: 'Vue' },
      { id: 1, limit: 'Webpack', text: 'Webpack' },
      { id: 1, limit: 'Node.js', text: 'Node.js' },
      { id: 1, limit: 'Koa', text: 'Koa' },
      { id: 1, limit: 'Express', text: 'Express' },
      { id: 1, limit: 'WebComponent', text: 'Web Component' },
      { id: 1, limit: 'MiniProgram', text: '小程序' },
    ],
    android: [],
    iOS: [],
    ai: [],
  };

  function limitClick(item, index) {
    setLimitActive(index);
    props.onLimitChange(item.limit);
  }

  return (
    <View style={styles.limitContainer}>
      {
        list[props.type].map((item, index) => (
          <Text 
            key={index} 
            style={[styles.limitItem, index === limitActive ? styles.limitActive : '']}
            onPress={() => limitClick(item, index)}
          >{ item.text }</Text>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  limitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingTop: 8,
    backgroundColor: '#eee'
  },
  limitItem: {
    alignSelf: 'flex-start',
    marginRight: 8,
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    color: '#999',
    backgroundColor: '#fff',
    borderRadius: 30
  },
  limitActive: {
    color: '#fff',
    backgroundColor: THEME_COLOR
  }
})

export default ContentLimit;
