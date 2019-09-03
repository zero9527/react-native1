import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, View } from 'react-native';
import ContentLimit from './contentLimit';
import Recommand from './components/recommand';
import Attention from './components/attention';
import Backend from './components/backend';
import Frontend from './components/frontend';
import Android from './components/android';
import IOS from './components/iOS';
import AI from './components/ai';

const Content = (props) => {
  const [contentLimit, setContentLimit] = useState('All');

  const showContentLimit = useMemo(() => {
    return props.contentType !== 'recommand' && props.contentType !== 'attention'
  }, [props.contentType]);

  const compProps = useMemo(() => {
    return {
      limit: contentLimit,
      navigation: props.navigation
    }
  }, [props.contentType]);

  return (
    <View style={styles.container}>
      { showContentLimit && 
        <ContentLimit 
          type={props.contentType} 
          showHeaderTitle={props.showHeaderTitle} 
          onLimitChange={(limit) => setContentLimit(limit)} 
        />
      }

      {props.contentType === 'recommand' && <Recommand {...compProps} />}
      {props.contentType === 'attention' && <Attention {...compProps} />}
      {props.contentType === 'backend' && <Backend {...compProps} />}
      {props.contentType === 'frontend' && <Frontend {...compProps} />}
      {props.contentType === 'android' && <Android {...compProps} />}
      {props.contentType === 'iOS' && <IOS {...compProps} />}
      {props.contentType === 'ai' && <AI {...compProps} />}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  colorGray: {
    color: '#ccc',
    fontSize: 14
  }
})

export default Content;
