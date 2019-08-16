import React, { useState } from "react";
import Header from './HomeContent/header';
import HomeContent from './HomeContent';

const Home = (props) => {
  const [contentType, setContentType] = useState('recommand');

  return (
    <>
      <Header onTagChange={(type) => setContentType(type)} />
      <HomeContent contentType={contentType} navigation={props.navigation} />
    </>
  )
}

export default Home;
