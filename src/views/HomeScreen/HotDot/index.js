import React from "react";
import Recommand from './components/recommand';
import Attention from './components/attention';
import Backend from './components/backend';
import Frontend from './components/frontend';
import Android from './components/android';
import IOS from './components/iOS';
import AI from './components/ai';

const Content = (props) => {

  function ContentComponent(compProps) {
    const list = {
      recommand: <Recommand {...compProps} />,
      attention: <Attention {...compProps} />,
      backend: <Backend {...compProps} />,
      frontend: <Frontend {...compProps} />,
      android: <Android {...compProps} />,
      iOS: <IOS {...compProps} />,
      ai: <AI {...compProps} />
    };
    return list[compProps.contentType];
  }

  return (
    <ContentComponent 
      contentType={props.contentType}
      navigation={props.navigation} 
    />
  )
}

export default Content;
