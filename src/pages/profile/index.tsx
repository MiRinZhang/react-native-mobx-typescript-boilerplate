import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

@navigation('Setting')
export default class Profile extends Component<{}, {}> {
    render() {
        return (
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Text>Profile content</Text>
            </View>
        );
    }
}
