import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import Home from 'pages/home';
import Detail from 'pages/detail';

const HomeStack = createStackNavigator({
    Home,
    Detail,
});

const Navigators = createBottomTabNavigator(
    {
        Main: {
            screen: HomeStack,
            navigationOptions: {
                title: '首页',
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
