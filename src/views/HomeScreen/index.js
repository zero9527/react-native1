import React, { useState, useEffect, useMemo } from "react";
import { DeviceEventEmitter, StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';
import Header from './Header';
import Home from './Home';
import HotDot from './HotDot';
import Topic from './Topic';
import Book from './Book';
import Activity from './Activity';

// 首页
const HomeScreen = (props) => {
  const [contentType, setContentType] = useState('recommand');
  const [headerTitle, setHeaderTitle] = useState('hotdot');
  const [showHeaderTitle, setShowHeaderTitle] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    DeviceEventEmitter.addListener('contentScroll', onScroll);
  }, []);

  function onScroll(scrollTopCurrent, scrollTopLast) {
    // console.log(scrollTopCurrent, scrollTopLast);
    if (scrollTopCurrent < 50) {
      setShowHeaderTitle(true);
      return;
    }
    setShowHeaderTitle(scrollTopCurrent > scrollTopLast ? false : true);
  }

  // 动态组件加载方式1
  function ContentComponent() {
    const list = {
      home: <Home {...compProps} />,
      hotdot: <HotDot {...compProps} />,
      topic: <Topic {...compProps} />,
      book: <Book {...compProps} />,
      activity: <Activity {...compProps} />
    };
    return list[headerTitle];
  }

  const compProps = useMemo(() => {
    return {
      style: styles.contentStyle,
      contentType: contentType,
      navigation: props.navigation
    }
  }, [contentType]);

  return (
    <View style={{paddingTop: showHeaderTitle ? 110 : 70}}>
      <Header 
        showHeaderTitle={showHeaderTitle}
        headerTitle={headerTitle}
        onTagChange={(type) => setContentType(type)} 
        onHeaderTitleChange={(value) => setHeaderTitle(value)}
      />
      
      {/* 动态组件加载方式1 */}
      { ContentComponent() }
      
      {/* 动态组件加载方式2 */}
      {/* {headerTitle === 'home' && <Home {...compProps} />}
      {headerTitle === 'hotdot' && <HotDot {...compProps} />}
      {headerTitle === 'topic' && <Topic {...compProps} />}
      {headerTitle === 'book' && <Book {...compProps} />}
      {headerTitle === 'activity' && <Activity {...compProps} />} */}
    </View>
  )
}

const styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 100
  }
});

export default HomeScreen;
