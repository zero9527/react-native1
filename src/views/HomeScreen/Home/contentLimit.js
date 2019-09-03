import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Animated } from 'react-native';
import { THEME_COLOR } from 'src/utils';

function ContentLimit(props) {
  const [limitActive, setLimitActive] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

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

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.showHeaderTitle ? 0 : -60,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, [props.showHeaderTitle]);

  function limitClick(item, index) {
    setLimitActive(index);
    props.onLimitChange(item.limit);
  }

  return (
    <>
      {list[props.type].length > 0 && (
        <Animated.View style={[
          styles.limitContainer, {
            translateY: fadeAnim
          }
        ]}>
          {
            list[props.type].map((item, index) => (
              <Text 
                key={index} 
                style={[styles.limitItem, index === limitActive ? styles.limitActive : '']}
                onPress={() => limitClick(item, index)}
              >{ item.text }</Text>
            ))
          }
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  limitContainer: {
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    // paddingTop: 8,
    paddingTop: 122,
    backgroundColor: '#eee',
    zIndex: 2
  },
  limitItem: {
    alignSelf: 'flex-start',
    marginRight: 8,
    marginBottom: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 30,
    color: '#999',
    backgroundColor: '#fff'
  },
  limitActive: {
    color: '#fff',
    backgroundColor: THEME_COLOR
  }
})

export default ContentLimit;
