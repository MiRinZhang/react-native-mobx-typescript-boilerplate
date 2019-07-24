import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface Props {
    [key: string]: any;
}

export default class Detail extends Component<Props, {}> {
    render() {
        return (
            <View>
                <Text>Detail</Text>
            </View>
        );
    }
}
