import React, { useState, useMemo } from "react";
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

  const showContentLimit = useMemo(() => {
    return props.contentType !== 'recommand' && props.contentType !== 'attention'
  }, [props.contentType]);

  return (
    <View style={styles.container}>
      { showContentLimit && 
        <ContentLimit type={props.contentType} onLimitChange={(limit) => setContentLimit(limit)} />
      }
      <ContentComponent 
        limit={contentLimit} 
        contentType={props.contentType}
        navigation={props.navigation} 
      />
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
  },
  container: {
    paddingBottom: 50
  }
})

export default Content;
