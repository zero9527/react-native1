import React, { useMemo } from "react";
import Recommand from './components/recommand';
import Attention from './components/attention';
import Backend from './components/backend';
import Frontend from './components/frontend';
import Android from './components/android';
import IOS from './components/iOS';
import AI from './components/ai';

const Content = (props) => {

  const compProps = useMemo(() => {
    return {
      contentType: props.contentType,
      navigation: props.navigation
    }
  }, [props.contentType]);

  return (
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
