import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import { hideTabBar } from './utils';
import Home from 'pages/home';
import Detail from 'pages/detail';
import Profile from 'pages/Profile';

const HomeStack = createStackNavigator({
    Home,
    Detail,
});
HomeStack.navigationOptions = hideTabBar;

const ProfileStack = createStackNavigator({
    Profile,
});
ProfileStack.navigationOptions = hideTabBar;

const Navigators = createBottomTabNavigator(
    {
        Main: {
            screen: HomeStack,
            navigationOptions: {
                title: '首页',
            },
        },
        My: {
            screen: ProfileStack,
            navigationOptions: {
                title: '我的',
            },
        },
    },
    {
        initialRouteName: 'Main',
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
