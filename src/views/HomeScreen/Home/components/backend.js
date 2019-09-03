import React, { useState, useEffect } from 'react';
import ContentItem from '../contentItem';
import { backend } from '../data';

let timer = null;

function Backend(props) {
  const [contentData, setContentData] = useState(backend);
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
      style={{ paddingTop: 190 }}
      {...props}
    />
  )
}

export default Backend;
