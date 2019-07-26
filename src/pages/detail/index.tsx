import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { navigation } from 'utils/uiDecorator';

@navigation('Detail')
export default class Detail extends Component<{}, {}> {
    render() {
        return (
            <View>
                <Text>Detail</Text>
            </View>
        );
    }
}
