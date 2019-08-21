import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/views/HomeScreen';
import DetailScreen from './src/views/Detail';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Detail: {
      screen: DetailScreen
    },
  },
  {
    headerMode: 'none'
  }
);

export default HomeStack;
