import { NavigationScreenConfigProps } from 'react-navigation';

/**
 * 隐藏底部栏
 * @param navigation
 * @returns {{tabBarVisible: boolean}}
 */
export function hideTabBar({ navigation }: NavigationScreenConfigProps) {
    const { state } = navigation,
        { index } = state,
        tabBarVisible = index <= 0;

    return { tabBarVisible };
}
