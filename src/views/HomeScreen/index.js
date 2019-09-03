import React, { useState, useEffect, useMemo } from "react";
import { DeviceEventEmitter } from 'react-native';
import Header from './Header';
import Home from './Home';
import HotDot from './HotDot';

// 首页
const HomeScreen = (props) => {
  const [contentType, setContentType] = useState('recommand');
  const [headerTitle, setHeaderTitle] = useState('home');
  const [showHeaderTitle, setShowHeaderTitle] = useState(true);

  useEffect(() => {
    DeviceEventEmitter.addListener('contentScroll', onScroll);
  }, []);

  const compProps = useMemo(() => {
    return {
      showHeaderTitle: showHeaderTitle,
      contentType: contentType,
      navigation: props.navigation
    }
  }, [contentType, showHeaderTitle]);

  function onScroll(scrollTopCurrent, scrollTopLast) {
    // console.log(scrollTopCurrent > scrollTopLast);
    if (scrollTopCurrent < 30) {
      setTimeout(() => {
        setShowHeaderTitle(true)
      }, 0);
      return;
    }
    setTimeout(() => {
      setShowHeaderTitle(scrollTopCurrent > scrollTopLast ? false : true);
    }, 0);
  }

  function onHeaderTitleChange(value) {
    setHeaderTitle(value);
    setContentType('recommand');
  }

  return (
    <>
      <Header 
        showHeaderTitle={showHeaderTitle}
        headerTitle={headerTitle}
        contentType={contentType}
        onContentTypeChange={(type) => setContentType(type)} 
        onHeaderTitleChange={(value) => onHeaderTitleChange(value)}
      />
      
      {headerTitle === 'home' && <Home {...compProps} />}
      {headerTitle === 'hotdot' && <HotDot {...compProps} />}
    </>
  )
}

export default HomeScreen;
