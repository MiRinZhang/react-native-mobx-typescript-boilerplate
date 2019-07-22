import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react/native';

interface Props {
	[key: string]: any;
}

interface State {
	[key: string]: any;
}

@inject('store')
@observer
export default class HomePage extends Component<Props, State> {
	constructor(props: Props, state: State) {
		super(props, state);
	}

	render() {
		const { data, setName } = this.props.store,
			{ name } = data;
		return (
			<View>
				<Text>HomePage</Text>
				<Text>Name: {name}</Text>
				<TouchableOpacity onPress={() => setName('test name' + Date.now())}>
					<Text>click</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
