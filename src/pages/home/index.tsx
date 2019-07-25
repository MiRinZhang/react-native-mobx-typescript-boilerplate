/**
 * @format
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { NavigationScreenProp } from 'react-navigation';
import { inject, observer } from 'mobx-react';
import { navigation } from 'utils/uiDecorator';
import { IHomeStore } from 'models/home';
import { styles } from './style';

interface Props {
    homeStore: IHomeStore;
    // @ts-ignore
    navigation: NavigationScreenProp;
}

@inject('homeStore')
@observer
@navigation('首页')
export default class HomePage extends Component<Props, {}> {
    constructor(props: Props, state: {}) {
        super(props, state);
    }

    render() {
        const { message, updateMessage } = this.props.homeStore;

        return (
            <View style={styles.wrapper}>
                <Text>Message: {message}</Text>
                <Button
                    success
                    style={styles.button}
                    onPress={() =>
                        updateMessage('test message: ' + Date.now())
                    }>
                    <Text>change message</Text>
                </Button>

                <Button
                    info
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Detail')}>
                    <Text>go detail</Text>
                </Button>
            </View>
        );
    }
}
