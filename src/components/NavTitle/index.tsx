import React, { SFC } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';

interface TitleProps {
    name: string;
    textStyle?: TextStyle;
}

const Title: SFC<TitleProps> = props => {
    const { name, textStyle } = props;

    return (
        <View>
            <Text style={[styles.title, textStyle]} numberOfLines={1}>
                {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Title;
