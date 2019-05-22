import React from 'react';
import {Platform, StyleSheet, Text, Image, StatusBar , View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, getActiveChildNavigationOptions, createNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen';

const headerNavigationOptions = {
  headerStyle: {
    backgroundColor: 'deepskyblue',
    marginTop: (Platform.OS === 'android' ? 24 : 0)
  },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
};

const HomeStack = createStackNavigator({ // ←追記部分
  home: {
    screen: HomeScreen,
    navigationOptions: {
      ...headerNavigationOptions,
      headerTitle: 'Treco', // ←アプリ名は何でも良い
      headerBackTitle: 'Home'
    },
  },
  detail: {
    screen: DetailScreen,
    navigationOptions: {
      ...headerNavigationOptions,
      headerTitle: 'Detail',
    }
  }
});

// 1階層目以外はタブを隠す
HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === 0)
  };
};

const AddStack = createStackNavigator({ // ←追記部分
  add: {
    screen: AddScreen,
    navigationOptions: {
      header: null
    }
  }
});

AddStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === -1) // ←0じゃなくて-1
  };
};

const ProfileStack = createStackNavigator({ // ←追記部分
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      ...headerNavigationOptions,
      headerTitle: 'Treco',
      headerBackTitle: 'Profile'
    }
  },
  setting1: {
    screen: Setting1Screen,
    navigationOptions: {
      ...headerNavigationOptions,
      headerTitle: 'Setting 1',
      // headerBackTitle: 'Setting 1' は要らない。
    }
  },
  setting2: {
    screen: Setting2Screen,
    navigationOptions: {
      ...headerNavigationOptions,
      headerTitle: 'Setting 2',
    }
  }
});

ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: (navigation.state.index === 0)
  };
};


const MainTab = createBottomTabNavigator({
  homeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{ height: 25, width: 25, tintColor: tintColor }}
          source={require('./assets/home.png')}
        />
      ),
      title: 'Home'
    }
  },
  addStack: {
    screen: AddStack,
    navigationOptions: {
      tabBarIcon: () => (
        <Image
          style={{ height: 60, width: 60, tintColor: 'deepskyblue' }}
          source={require('./assets/add.png')}
        />
      ),
      title: '',
    }
  },
  profileStack: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{ height: 25, width: 25, tintColor: tintColor }}
          source={require('./assets/profile.png')}
        />
      ),
      title: 'Profile'
    }
  }
}, {
  swipeEnabled: false, // Android用
});

const NavigatorTab = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  main: {screen: MainTab}
}, {
  tabBarVisible: false
});

const AppContainer = createAppContainer(NavigatorTab);



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppContainer
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',

  },
});

