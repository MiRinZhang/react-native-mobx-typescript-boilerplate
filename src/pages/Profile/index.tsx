import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

interface Props {
    [key: string]: any;
}

@navigation('我的')
export default class Profile extends Component<Props, {}> {
    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        );
    }
}
