import React, { useState, useEffect } from 'react';
import ContentItem from './contentItem';
import { headerTagChangeList } from './index';
import { recommand } from '../data';

console.log(headerTagChangeList);
let timer;

function Recommand(props) {
  const [contentData, setContentData] = useState(recommand);
  const [isRefreshing, setIsRefreshing] = useState(true);

  useEffect(() => {
    // if (!headerTagChangeList[props.contentType]) 
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
    setContentData(contentData.concat(recommand[0]));
  }

  function onScroll(e) {
    // console.log(e);
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
      onScroll={onScroll}
      {...props} 
    />
  )
}

export default Recommand;
