import React, { useState, useEffect } from 'react';
import ContentItem from '../contentItem';
import { Text } from 'react-native';
import { iOS } from '../data';

let timer;

function IOS(props) {
  const [contentData, setContentData] = useState(iOS);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    onRefresh();

    return () => {
      clearTimeout(timer);
    }
  }, []);

  function onRefresh() {
    setIsRefreshing(true);
    timer = setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }

  function onEndReached({ distanceFromEnd }) {
    console.log('distanceFromEnd: ', distanceFromEnd);
  }

  function onTagChange(type) {
    console.log(type);
  }

  return (
    <ContentItem 
      onTagChange={onTagChange}
      contentData={contentData} 
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      {...props}
      renderItem={
        () => <Text>iOS</Text>
      }
    />
  )
}

export default IOS;
