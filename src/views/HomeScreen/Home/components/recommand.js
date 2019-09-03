import React, { useState, useEffect } from 'react';
import ContentItem from '../contentItem';
import { recommand } from '../data';

let timer;

function Recommand(props) {
  const [contentData, setContentData] = useState(recommand);
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
    setContentData(contentData.concat(recommand[0]));
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
    />
  )
}

export default Recommand;
