/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// todo
import { Provider } from 'mobx-react/native';
import HomePage from './src/pages/home';
import RootStore from './src/models';

const stores = new RootStore();

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView>
                <Provider store={stores}>
                    <HomePage />
                </Provider>
            </SafeAreaView>
        </Fragment>
    );
};

export default App;
