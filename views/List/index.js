import React from "react";
import { View, Text, Button } from 'react-native';

const List = (props) => {
  return (
    <View>
      <Text>list</Text>
      <Button 
        title="to detail" 
        onPress={() => props.navigation.navigate('Detail')}
      />
    </View>
  )
}

export default List;
