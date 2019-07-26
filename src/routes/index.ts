import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import { hideTabBar } from './utils';
import Welcome from 'pages/welcome';
import Detail from 'pages/detail';
import Profile from 'pages/profile';

const HomeStack = createStackNavigator({
    Welcome,
    Detail,
});
HomeStack.navigationOptions = hideTabBar;

const SettingStack = createStackNavigator({
    Profile,
});
SettingStack.navigationOptions = hideTabBar;

const Navigators = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                title: 'News',
            },
        },
        Setting: {
            screen: SettingStack,
            navigationOptions: {
                title: 'My',
            },
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            tabStyle: {
                padding: 0,
                margin: 0,
                height: 40,
            },
        },
    }
);

export default createAppContainer(Navigators);
