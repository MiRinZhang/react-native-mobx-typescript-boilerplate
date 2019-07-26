import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

@navigation('Detail')
export default class Detail extends Component<{}, {}> {
    render() {
        return (
            <View style={{ margin: 10, alignItems: 'center' }}>
                <Text>Detail content</Text>
            </View>
        );
    }
}
