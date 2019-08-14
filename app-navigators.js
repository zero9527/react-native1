import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';
import ListScreen from './views/List';
import DetailScreen from './views/Detail';

const AppNavigators = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    List: {
      screen: ListScreen
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigators;
