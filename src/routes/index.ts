import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

const HomeStack = createStackNavigator({});

export const Navigators = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                title: '首页',
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
