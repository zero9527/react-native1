import React from 'react';
import { createBottomTabNavigator ,createStackNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

import HomeScreen from './views/Home';
import ListScreen from './views/Home/List';
import DetailScreen from './views/Home/Detail';

import SettingsScreen from './views/Settings';

import MineScreen from './views/Mine';

const HomeStack = createStackNavigator(
  {
    // Home: {
    //   screen: HomeScreen
    // },
    List: {
      screen: ListScreen
    },
    Detail: {
      screen: DetailScreen
    },
  },
  {
    headerMode: 'none'
  }
);

const SettingsStack = createStackNavigator({
  Setting: SettingsScreen
});

const MineStack = createStackNavigator({
  Mine: MineScreen
});

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Mine: MineStack
  },
  {
    // tab 样式
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === 'Home') {
          iconName = 'home';
          IconComponent = HomeIcon;
        } else if (routeName === 'Settings') {
          iconName = 'setting';
        } else if (routeName === 'Mine') {
          iconName = 'like2';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
      tabBarVisible: () => {
        const routeName = navigation.state;
        const tabList = ['Home', 'Setting', 'Mine'];
        console.log('tabbar: ', tabbar);
        return Boolean(tabList.includes(routeName));
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
  }
)

class HomeIcon extends React.Component {
  render() {
    const { name, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} size={size} color={color} />
      </View>
    );
  }
}

export default tabNavigator;
