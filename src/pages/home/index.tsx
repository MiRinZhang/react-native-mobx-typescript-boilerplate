/**
 * @format
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import { navigation } from 'utils/uiDecorator';
import { IHomeStore } from 'models/home';

interface Props {
    homeStore: IHomeStore;
    [key: string]: any;
}

interface State {
    [key: string]: any;
}

@inject('homeStore')
@observer
@navigation('啦啦啦')
export default class HomePage extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
    }

    render() {
        const { message, updateMessage } = this.props.homeStore;

        return (
            <View>
                <Text>HomePage</Text>
                <Text>Name: {message}</Text>
                <TouchableOpacity
                    onPress={() => updateMessage('test name' + Date.now())}>
                    <Text>click</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
