import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import ContentItem from '../contentItem';
import { android } from '../data';

function Android(props) {
  const [contentData, setContentData] = useState(android);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    console.log(props.renderItem);
    onRefresh();
  }, []);

  function onRefresh() {
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
        () => <Text>android</Text>
      }
    />
  )
}

export default Android;
