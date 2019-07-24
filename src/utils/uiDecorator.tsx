import React, { ReactElement } from 'react';
import { TextStyle } from 'react-native';
import NavTitle from 'components/NavTitle';

interface titleType {
    title?: string;
    headerTitle?: string | ReactElement<any>;
}

/**
 * 设置标题
 * @param title
 * @param style
 */
export function navigation(title: string, style?: TextStyle): any {
    return (target: any): void => {
        const originNavigation = target.navigationOptions,
            commonTitle: titleType = {
                title,
                headerTitle: <NavTitle name={title} textStyle={style} />,
            };

        // 如果是函数则需要特殊处理
        if (typeof originNavigation === 'function') {
            target.navigationOptions = (...args: any[]) => ({
                ...commonTitle,
                ...originNavigation(...args),
            });
        } else {
            target.navigationOptions = {
                ...commonTitle,
                ...target.navigationOptions,
            };
        }
    };
}
