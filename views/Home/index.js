import React from "react";
import { View, Text, Button } from 'react-native';

const Home = (props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="to list"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  )
}

export default Home;
