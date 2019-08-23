import React, { useMemo } from "react";
import Recommand from './components/recommand';
import Attention from './components/attention';
import Backend from './components/backend';
import Frontend from './components/frontend';
import Android from './components/android';
import IOS from './components/iOS';
import AI from './components/ai';

const Content = (props) => {

  // 动态组件加载方式1
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

  // 动态组件加载方式2
  const compProps = useMemo(() => {
    return {
      contentType: props.contentType,
      navigation: props.navigation
    }
  }, [props.contentType]);

  return (
    // 动态组件加载方式1
    // <ContentComponent 
    //   contentType={props.contentType}
    //   navigation={props.navigation} 
    // />

    // 动态组件加载方式2
    <>
      {props.contentType === 'recommand' && <Recommand {...compProps} />}
      {props.contentType === 'attention' && <Attention {...compProps} />}
      {props.contentType === 'backend' && <Backend {...compProps} />}
      {props.contentType === 'frontend' && <Frontend {...compProps} />}
      {props.contentType === 'android' && <Android {...compProps} />}
      {props.contentType === 'iOS' && <IOS {...compProps} />}
      {props.contentType === 'ai' && <AI {...compProps} />}
    </>
  )
}

export default Content;
