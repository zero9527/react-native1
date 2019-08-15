import React from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home</Text>
      <Button
        title="to list"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    height: '100%',
    justifyContent: 'center'
  },
  homeText: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default Home;
