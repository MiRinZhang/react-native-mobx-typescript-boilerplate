/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'mobx-react/native';
import App from './src';
import { rootModel } from 'models';

export default () => (
    <Provider {...rootModel}>
        <App />
    </Provider>
);
