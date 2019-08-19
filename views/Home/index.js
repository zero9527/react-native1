import React, { useState } from "react";
import Header from './HomeContent/header';
import HomeContent from './HomeContent';

export let headerTagChangeList = {
  recommand: false,
  attention: false,
  backend: false,
  frontend: false,
  android: false,
  iOS: false,
  ai: false
};

const Home = (props) => {
  const [contentType, setContentType] = useState('recommand');

  function onTagChange(type) {
    headerTagChangeList[type] = true;
    setContentType(type);
  }

  return (
    <>
      <Header onTagChange={(type) => onTagChange(type)} />
      <HomeContent contentType={contentType} navigation={props.navigation} />
    </>
  )
}

export default Home;
