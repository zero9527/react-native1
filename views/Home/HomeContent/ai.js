import React, { useState, useEffect } from 'react';
import ContentItem from './contentItem';
import { Text } from 'react-native';
import { ai } from '../data';

function AI(props) {
  const [contentData, setContentData] = useState(ai);
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
      navigation={props.navigation} 
      onTagChange={onTagChange}
      contentData={contentData} 
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      renderItem={
        () => <Text>ai</Text>
      }
    />
  )
}

export default AI;
