import React, { useState } from "react";
import Header from './Header';
import Home from './Home';
import HotDot from './HotDot';
import Topic from './Topic';
import Book from './Book';
import Activity from './Activity';

// 首页
const HomeScreen = (props) => {
  const [contentType, setContentType] = useState('recommand');
  const [headerTitle, setHeaderTitle] = useState('home');

  function ContentComponent(compProps) {
    const list = {
      home: <Home {...compProps} />,
      hotdot: <HotDot {...compProps} />,
      topic: <Topic {...compProps} />,
      book: <Book {...compProps} />,
      activity: <Activity {...compProps} />
    };
    return list[headerTitle];
  }

  return (
    <>
      <Header 
        onTagChange={(type) => setContentType(type)} 
        onHeaderTitleChange={(value) => setHeaderTitle(value)}
      />
      <ContentComponent 
        contentType={contentType} 
        navigation={props.navigation} 
      />
    </>
  )
}

export default HomeScreen;
