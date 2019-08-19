import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import ContentLimit from './contentLimit';
import Recommand from './recommand';
import Attention from './attention';
import Backend from './backend';
import Frontend from './frontend';
import Android from './android';
import IOS from './iOS';
import AI from './ai';

const HomeContent = (props) => {
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

  return (
    <View style={styles.container}>
      <ContentLimit type={props.contentType} onLimitChange={(limit) => setContentLimit(limit)} />
      <ContentComponent 
        contentType={props.contentType}
        limit={contentLimit} 
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

export default HomeContent;
