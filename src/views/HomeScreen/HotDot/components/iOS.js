import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import ContentItem from '../contentItem';
import { iOS } from '../data';

function IOS(props) {
  const [contentData, setContentData] = useState(iOS);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    onRefresh();
  }, []);

  function onRefresh() {
    console.log('下拉刷新');
    setIsRefreshing(true);
    setTimeout(() => {
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
