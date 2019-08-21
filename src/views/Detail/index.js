import React, { useEffect } from "react";
import { StyleSheet, ScrollView, Text, Image } from 'react-native';
import img from '../../images/wallhaven-kw1ky1.jpg';
import img2 from '../../images/wallhaven-kw1ky2.jpg';

const Detail = (props) => {
  useEffect(() => {
    console.log(props.navigation.state.params);
  }, []);

  return (
    <ScrollView>
      <Text>Detail</Text>
      <Image source={img} resizeMode="contain" resizeMethod="auto" style={styles.img} />
      <Text>Ahhshshshsh</Text>
      <Image source={img2} resizeMode="contain" resizeMethod="auto" style={styles.img2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 240
  },
  img2: {
    width: '100%',
    height: 400
  }
})

export default Detail;
